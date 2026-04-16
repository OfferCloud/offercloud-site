import {
  OC_THEME_CLASS_DARK,
  OC_THEME_STORAGE_KEY,
} from "@/components/theme/theme-constants";

// This component runs a tiny script in `<head>` (`beforeInteractive`)
// so `class="dark"` is set early (no flash), based on localStorage or system.
export function ThemeInitScript() {
  const code = `(function () {
  var storageKey = ${JSON.stringify(OC_THEME_STORAGE_KEY)};
  var darkClass = ${JSON.stringify(OC_THEME_CLASS_DARK)};

  function getSystemTheme() {
    try {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    } catch (e) {
      return 'light';
    }
  }

  function getStoredTheme() {
    try {
      var value = localStorage.getItem(storageKey);
      return value === 'light' || value === 'dark' ? value : null;
    } catch (e) {
      return null;
    }
  }

  var theme = getStoredTheme() || getSystemTheme();

  document.documentElement.classList.toggle(darkClass, theme === 'dark');
  document.documentElement.style.colorScheme = theme;
})();`;

  return (
    <script
      id="oc-theme-init"
      // Sets theme class as early as possible to avoid a flash of wrong theme.
      dangerouslySetInnerHTML={{ __html: code }}
    />
  );
}

