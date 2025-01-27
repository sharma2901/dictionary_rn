export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface ThemeColors {
  primary: string;
  primaryFocus: string;
  primaryContent: string;

  secondary: string;
  secondaryFocus: string;
  secondaryContent: string;

  accent: string;
  accentFocus: string;
  accentContent: string;

  neutral: string;
  neutralFocus: string;
  neutralContent: string;

  base100: string;
  base200: string;
  base300: string;
  baseContent: string;

  info: string;
  success: string;
  warning: string;
  error: string;
}

export interface ThemeConfig {
  colors: ThemeColors;
  name: Theme;
}
