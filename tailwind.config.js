/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        // Portfolio Design System (Figma: "Portfolio Design System" board, Oct 2026)
        // Light workspace, not a dark theme — dark mode toggle removed site-wide.
        primary: "#20211F",
        "primary-secondary": "#77796F",
        "background-light": "#F2F0E8",
        "cta-default": "#20211F",
        "cta-hover": "#309BEE",
        "btn-default": "#20211F",
        "btn-hover": "#309BEE",
        "border-color": "#CDCEC4",
        "card-light": "#FAF9F4",
        // Semantic tokens straight from Figma variable defs
        ink: {
          primary: "#20211F",
          secondary: "#77796F",
          muted: "#AAAAA0",
        },
        surface: {
          workspace: "#F2F0E8",
          window: "#FAF9F4",
          "window-alt": "#F8F7F1",
          titlebar: "#E8E7DF",
          "titlebar-alt": "#ECEAE2",
          control: "#E6E6DE",
        },
        border: {
          subtle: "#CDCEC4",
        },
        accent: {
          action: "#244BFF",
        },
        folder: {
          base: "#309BEE",
          highlight: "#76C3FF",
        },
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
        serif: ["Tinos", "Georgia", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        window: "12px",
        "4xl": "2rem",
      },
      boxShadow: {
        "window-active": "0px 12px 36px 0px rgba(32,33,31,0.09)",
        "window-inactive": "0px 4px 16px 0px rgba(32,33,31,0.04)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};
