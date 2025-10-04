// Color palette types for Nueva Casa brand
export interface ColorPalette {
  primary: string;
  primaryDark: string;
  primaryLight: string;
  primary50: string;
  secondary: string;
  secondaryDark: string;
  accent: string;
  white: string;
  gray50: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
  success: string;
  warning: string;
  error: string;
  info: string;
}

// Color constants for use in components
export const colors: ColorPalette = {
  primary: "#9333ea",
  primaryDark: "#7c3aed",
  primaryLight: "#a855f7",
  primary50: "#f3e8ff",
  secondary: "#06b6d4",
  secondaryDark: "#0891b2",
  accent: "#f59e0b",
  white: "#ffffff",
  gray50: "#f9fafb",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#d1d5db",
  gray400: "#9ca3af",
  gray500: "#6b7280",
  gray600: "#4b5563",
  gray700: "#374151",
  gray800: "#1f2937",
  gray900: "#111827",
  success: "#10b981",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#3b82f6",
};

// CSS custom properties names for use in styled components
export const cssVars = {
  primary: "var(--color-primary)",
  primaryDark: "var(--color-primary-dark)",
  primaryLight: "var(--color-primary-light)",
  primary50: "var(--color-primary-50)",
  secondary: "var(--color-secondary)",
  secondaryDark: "var(--color-secondary-dark)",
  accent: "var(--color-accent)",
  white: "var(--color-white)",
  gray50: "var(--color-gray-50)",
  gray100: "var(--color-gray-100)",
  gray200: "var(--color-gray-200)",
  gray300: "var(--color-gray-300)",
  gray400: "var(--color-gray-400)",
  gray500: "var(--color-gray-500)",
  gray600: "var(--color-gray-600)",
  gray700: "var(--color-gray-700)",
  gray800: "var(--color-gray-800)",
  gray900: "var(--color-gray-900)",
  success: "var(--color-success)",
  warning: "var(--color-warning)",
  error: "var(--color-error)",
  info: "var(--color-info)",
  gradientPrimary: "var(--gradient-primary)",
  gradientHero: "var(--gradient-hero)",
  gradientSoft: "var(--gradient-soft)",
};

export default colors;
