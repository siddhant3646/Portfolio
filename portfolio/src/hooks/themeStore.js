export const THEME_STORAGE_KEY = 'portfolio-theme';

export const normalizePreference = (value) =>
  value === 'light' || value === 'dark' ? value : 'system';

export const resolveTheme = (preference, systemDark) =>
  preference === 'system' ? (systemDark ? 'dark' : 'light') : preference;

// Shared by every appearance control. Storage is optional: a blocked browser
// storage API must never prevent someone from changing the visible theme.
export function createThemeStore({ browser, root }) {
  const media = browser.matchMedia('(prefers-color-scheme: dark)');
  let storage;
  let initialPreference = 'system';

  try {
    storage = browser.localStorage;
    initialPreference = normalizePreference(storage.getItem(THEME_STORAGE_KEY));
  } catch {
    // System preference remains available even when localStorage is blocked.
  }

  let snapshot = {
    preference: initialPreference,
    theme: resolveTheme(initialPreference, media.matches),
  };
  const listeners = new Set();

  const applyTheme = () => {
    root.classList.toggle('dark', snapshot.theme === 'dark');
    root.style.colorScheme = snapshot.theme;
  };

  const updatePreference = (value) => {
    const preference = normalizePreference(value);
    const theme = resolveTheme(preference, media.matches);

    if (preference === snapshot.preference && theme === snapshot.theme) return;

    snapshot = { preference, theme };
    applyTheme();
    listeners.forEach((listener) => listener());
  };

  const handleSystemChange = () => {
    if (snapshot.preference === 'system') updatePreference('system');
  };

  const handleStorageChange = (event) => {
    if (event.storageArea && event.storageArea !== storage) return;
    if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;
    updatePreference(event.newValue);
  };

  applyTheme();

  return {
    getSnapshot: () => snapshot,
    setPreference: (value) => {
      const preference = normalizePreference(value);
      updatePreference(preference);

      try {
        storage?.setItem(THEME_STORAGE_KEY, preference);
      } catch {
        // Keep the current selection for this visit if persistence fails.
      }
    },
    subscribe: (listener) => {
      if (listeners.size === 0) {
        media.addEventListener('change', handleSystemChange);
        browser.addEventListener('storage', handleStorageChange);
        handleSystemChange();
      }
      listeners.add(listener);

      return () => {
        listeners.delete(listener);
        if (listeners.size === 0) {
          media.removeEventListener('change', handleSystemChange);
          browser.removeEventListener('storage', handleStorageChange);
        }
      };
    },
  };
}
