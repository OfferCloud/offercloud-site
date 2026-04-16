"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import {
  OC_THEME_CLASS_DARK,
  OC_THEME_STORAGE_KEY,
  type OcTheme,
  type OcThemePreference,
} from "@/components/theme/theme-constants";

type ThemeContextValue = {
  preference: OcThemePreference;
  resolvedTheme: OcTheme;
  setPreference: (preference: OcThemePreference) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getSystemTheme(): OcTheme {
  if (typeof window === "undefined") return "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function readStoredPreference(): OcThemePreference {
  if (typeof window === "undefined") return "system";

  try {
    const storedTheme = localStorage.getItem(OC_THEME_STORAGE_KEY);

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
  } catch {
    // Ignore blocked storage access and keep system preference.
  }

  return "system";
}

function applyResolvedTheme(theme: OcTheme) {
  document.documentElement.classList.toggle(
    OC_THEME_CLASS_DARK,
    theme === "dark",
  );
  document.documentElement.style.colorScheme = theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [systemTheme, setSystemTheme] = useState<OcTheme>(() =>
    getSystemTheme(),
  );
  const [preference, setPreferenceState] =
    useState<OcThemePreference>(() => readStoredPreference());

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const syncSystemTheme = () => {
      setSystemTheme(mediaQuery.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", syncSystemTheme);

    return () => {
      mediaQuery.removeEventListener("change", syncSystemTheme);
    };
  }, []);

  const resolvedTheme = preference === "system" ? systemTheme : preference;

  useEffect(() => {
    applyResolvedTheme(resolvedTheme);
  }, [resolvedTheme]);

  function setPreference(preferenceValue: OcThemePreference) {
    setPreferenceState(preferenceValue);

    try {
      if (preferenceValue === "system") {
        localStorage.removeItem(OC_THEME_STORAGE_KEY);
      } else {
        localStorage.setItem(OC_THEME_STORAGE_KEY, preferenceValue);
      }
    } catch {
      // Ignore blocked storage access.
    }
  }

  function toggleTheme() {
    setPreference(resolvedTheme === "dark" ? "light" : "dark");
  }

  const value: ThemeContextValue = {
    preference,
    resolvedTheme,
    setPreference,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider.");
  }

  return context;
}

