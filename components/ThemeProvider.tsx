import React, { createContext, useContext, useEffect, useState } from "react";
import { Theme, ThemeContextType } from "@/types/theme";
import { View } from "react-native";
import { vars } from "nativewind";

const themes = {
  light: vars({
    "--color-primary": "255 121 64",
    "--color-primary-focus": "255 102 32",
    "--color-primary-content": "255 255 255",

    "--color-secondary": "128 90 213",
    "--color-secondary-focus": "107 70 193",
    "--color-secondary-content": "255 255 255",

    "--color-accent": "255 90 31",
    "--color-accent-focus": "255 68 0",
    "--color-accent-content": "255 255 255",

    "--color-base-100": "255 255 255",
    "--color-base-200": "249 250 251",
    "--color-base-300": "237 242 247",
    "--color-base-content": "45 55 72",

    "--color-info": "49 130 206",
    "--color-success": "56 161 105",
    "--color-warning": "221 107 32",
    "--color-error": "229 62 62",
  }),
  dark: vars({
    "--color-primary": "255 121 64",
    "--color-primary-focus": "255 102 32",
    "--color-primary-content": "0 0 0",

    "--color-secondary": "159 122 234",
    "--color-secondary-focus": "128 90 213",
    "--color-secondary-content": "0 0 0",

    "--color-accent": "255 90 31",
    "--color-accent-focus": "255 68 0",
    "--color-accent-content": "0 0 0",

    "--color-base-100": "31 35 45",
    "--color-base-200": "37 41 51",
    "--color-base-300": "45 55 72",
    "--color-base-content": "237 242 247",

    "--color-info": "66 153 225",
    "--color-success": "72 187 120",
    "--color-warning": "237 137 54",
    "--color-error": "245 101 101",
  }),
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: Theme;
}

export function ThemeProvider({
  children,
  theme: initialTheme,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    setTheme(initialTheme);
  }, [initialTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <View
        className={`flex-1 ${theme === "dark" ? "dark" : ""}`}
        style={themes[theme]}
      >
        {children}
      </View>
    </ThemeContext.Provider>
  );
}
