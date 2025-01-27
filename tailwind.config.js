/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Brand colors using CSS variables
        primary: "rgb(var(--color-primary) )",
        "primary-focus": "rgb(var(--color-primary-focus) )",
        "primary-content": "rgb(var(--color-primary-content) )",

        secondary: "rgb(var(--color-secondary) )",
        "secondary-focus": "rgb(var(--color-secondary-focus) )",
        "secondary-content": "rgb(var(--color-secondary-content) )",

        accent: "rgb(var(--color-accent) )",
        "accent-focus": "rgb(var(--color-accent-focus) )",
        "accent-content": "rgb(var(--color-accent-content) )",

        // Background colors
        neutral: {
          DEFAULT: "#F7FAFC",
          focus: "#EDF2F7",
          content: "#1A202C",
          dark: {
            DEFAULT: "#1A202C",
            focus: "#2D3748",
            content: "#F7FAFC",
          },
        },
        // Base colors
        base: {
          100: "rgb(var(--color-base-100) )",
          200: "rgb(var(--color-base-200) )",
          300: "rgb(var(--color-base-300) )",
          content: "rgb(var(--color-base-content) )",
          dark: {
            100: "#171923",
            200: "#1A202C",
            300: "#2D3748",
            content: "#EDF2F7",
          },
        },
        // Semantic colors
        info: "rgb(var(--color-info) )",
        success: "rgb(var(--color-success) )",
        warning: "rgb(var(--color-warning) )",
        error: "rgb(var(--color-error) )",
        "base-100": {
          DEFAULT: "rgb(var(--color-base-100))",
          dark: "rgb(var(--color-base-100))",
        },
      },
      fontFamily: {
        sans: ["NotoSans"],
        "sans-italic": ["NotoSansItalic"],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [
    // Set default light theme values
    ({ addBase }) => {
      addBase({
        ":root": {
          "--color-primary": "255 121 64", // #FF7940
          "--color-primary-focus": "255 102 32", // #FF6620
          "--color-primary-content": "255 255 255", // #FFFFFF

          "--color-secondary": "128 90 213", // #805AD5
          "--color-secondary-focus": "107 70 193", // #6B46C1
          "--color-secondary-content": "255 255 255", // #FFFFFF

          "--color-accent": "255 90 31", // #FF5A1F
          "--color-accent-focus": "255 68 0", // #FF4400
          "--color-accent-content": "255 255 255", // #FFFFFF

          "--color-base-100": "255 255 255", // #FFFFFF
          "--color-base-200": "249 250 251", // #F9FAFB
          "--color-base-300": "237 242 247", // #EDF2F7
          "--color-base-content": "45 55 72", // #2D3748

          "--color-info": "49 130 206", // #3182CE
          "--color-success": "56 161 105", // #38A169
          "--color-warning": "221 107 32", // #DD6B20
          "--color-error": "229 62 62", // #E53E3E
        },
      });
    },
  ],
};
