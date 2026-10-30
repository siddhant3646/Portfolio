import { useSyncExternalStore } from 'react';
import { createThemeStore } from './themeStore';

export { THEME_STORAGE_KEY } from './themeStore';

const themeStore = createThemeStore({
  browser: window,
  root: document.documentElement,
});

export default function useTheme() {
  const { preference, theme } = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
  );

  return { preference, theme, setPreference: themeStore.setPreference };
}
