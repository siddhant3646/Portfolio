import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';
import { createThemeStore, THEME_STORAGE_KEY } from './themeStore.js';

function createEnvironment({ stored = null, systemDark = false, failRead = false, failWrite = false, failAccess = false } = {}) {
  const mediaListeners = new Set();
  const storageListeners = new Set();
  const classes = new Set();
  const storage = {
    getItem: () => {
      if (failRead) throw new Error('Storage read blocked');
      return stored;
    },
    setItem: (key, value) => {
      if (failWrite) throw new Error('Storage write blocked');
      assert.equal(key, THEME_STORAGE_KEY);
      stored = value;
    },
  };
  const media = {
    matches: systemDark,
    addEventListener: (name, listener) => mediaListeners.add(listener),
    removeEventListener: (name, listener) => mediaListeners.delete(listener),
  };
  const browser = {
    get localStorage() {
      if (failAccess) throw new Error('Storage access blocked');
      return storage;
    },
    matchMedia: () => media,
    addEventListener: (name, listener) => storageListeners.add(listener),
    removeEventListener: (name, listener) => storageListeners.delete(listener),
  };
  const root = {
    classList: {
      toggle: (name, enabled) => enabled ? classes.add(name) : classes.delete(name),
    },
    style: {},
  };

  return {
    browser,
    root,
    storage,
    isDark: () => classes.has('dark'),
    savedPreference: () => stored,
    systemChange: (dark) => {
      media.matches = dark;
      mediaListeners.forEach((listener) => listener({ matches: dark }));
    },
    storageChange: (newValue, key = THEME_STORAGE_KEY, storageArea = storage) => {
      storageListeners.forEach((listener) => listener({ key, newValue, storageArea }));
    },
    listenerCounts: () => [mediaListeners.size, storageListeners.size],
  };
}

test('initial preference uses the device unless a valid manual choice is stored', () => {
  for (const [stored, systemDark, preference, theme] of [
    [null, true, 'system', 'dark'],
    ['system', false, 'system', 'light'],
    ['unexpected', true, 'system', 'dark'],
    ['light', true, 'light', 'light'],
    ['dark', false, 'dark', 'dark'],
  ]) {
    const environment = createEnvironment({ stored, systemDark });
    const store = createThemeStore(environment);
    assert.deepEqual(store.getSnapshot(), { preference, theme });
    assert.equal(environment.isDark(), theme === 'dark');
    assert.equal(environment.root.style.colorScheme, theme);
  }
});

test('blocked storage reads or access still honor a dark device preference', () => {
  for (const failure of [{ failRead: true }, { failAccess: true }]) {
    const environment = createEnvironment({ systemDark: true, ...failure });
    const store = createThemeStore(environment);
    assert.deepEqual(store.getSnapshot(), { preference: 'system', theme: 'dark' });
    assert.equal(environment.isDark(), true);
    assert.doesNotThrow(() => store.setPreference('light'));
    assert.equal(environment.isDark(), false);
  }
});

test('blocked writes do not interrupt the visible state or subscriber updates', () => {
  const environment = createEnvironment({ failWrite: true });
  const store = createThemeStore(environment);
  let notifications = 0;
  const unsubscribe = store.subscribe(() => notifications++);

  assert.doesNotThrow(() => store.setPreference('dark'));
  assert.deepEqual(store.getSnapshot(), { preference: 'dark', theme: 'dark' });
  assert.equal(environment.isDark(), true);
  assert.equal(notifications, 1);
  unsubscribe();
});

test('device changes update system mode, preserve manual choices, and resume immediately', () => {
  const environment = createEnvironment();
  const store = createThemeStore(environment);
  const unsubscribe = store.subscribe(() => {});

  environment.systemChange(true);
  assert.equal(store.getSnapshot().theme, 'dark');
  store.setPreference('light');
  environment.systemChange(false);
  environment.systemChange(true);
  assert.deepEqual(store.getSnapshot(), { preference: 'light', theme: 'light' });
  store.setPreference('system');
  assert.deepEqual(store.getSnapshot(), { preference: 'system', theme: 'dark' });
  assert.equal(environment.savedPreference(), 'system');
  unsubscribe();
});

test('other tabs synchronize choices and return to system when storage is cleared', () => {
  const environment = createEnvironment({ systemDark: false });
  const store = createThemeStore(environment);
  const unsubscribe = store.subscribe(() => {});

  environment.storageChange('dark');
  assert.deepEqual(store.getSnapshot(), { preference: 'dark', theme: 'dark' });
  environment.storageChange(null);
  assert.deepEqual(store.getSnapshot(), { preference: 'system', theme: 'light' });
  store.setPreference('dark');
  environment.storageChange(null, null);
  assert.deepEqual(store.getSnapshot(), { preference: 'system', theme: 'light' });
  environment.storageChange('dark', 'unrelated-setting');
  environment.storageChange('dark', THEME_STORAGE_KEY, {});
  assert.equal(store.getSnapshot().preference, 'system');
  unsubscribe();
});

test('external snapshots remain stable and event listeners are cleaned up', () => {
  const environment = createEnvironment();
  const store = createThemeStore(environment);
  const initial = store.getSnapshot();
  const first = store.subscribe(() => {});
  const second = store.subscribe(() => {});
  assert.deepEqual(environment.listenerCounts(), [1, 1]);
  store.setPreference('system');
  assert.equal(store.getSnapshot(), initial);
  first();
  assert.deepEqual(environment.listenerCounts(), [1, 1]);
  second();
  assert.deepEqual(environment.listenerCounts(), [0, 0]);
});

test('the pre-paint bootstrap matches runtime resolution, including blocked storage', () => {
  const html = readFileSync(new URL('../../index.html', import.meta.url), 'utf8');
  const bootstrap = html.match(/<script>([\s\S]*?)<\/script>/)[1];

  for (const settings of [
    { systemDark: true },
    { stored: 'system', systemDark: true },
    { stored: 'light', systemDark: true },
    { stored: 'dark', systemDark: false },
    { stored: 'invalid', systemDark: true },
    { failRead: true, systemDark: true },
    { failAccess: true, systemDark: true },
  ]) {
    const environment = createEnvironment(settings);
    const context = {
      window: environment.browser,
      document: { documentElement: environment.root },
      get localStorage() { return environment.browser.localStorage; },
    };
    vm.runInNewContext(bootstrap, context);
    const bootstrappedDark = environment.isDark();
    const store = createThemeStore(environment);
    assert.equal(bootstrappedDark, store.getSnapshot().theme === 'dark');
  }
});
