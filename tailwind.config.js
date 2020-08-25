const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    typography: {
      md: {
        css: {
          lineHeight: "1.45",
          fontSize: "1.375rem",
          h2: { fontFamily: "europa" },
          h3: { fontFamily: "europa" }
        }
      },
      lg: {
        css: {
          lineHeight: "1.45",
          fontSize: "1.375rem",
          h2: { fontFamily: "europa" },
          h3: { fontFamily: "europa" }
        }
      }
    },
    extend: {
      borderRadius: {
        xl: "40px",
        card: "20px"
      },
      fontFamily: {
        sans: ['"futura-pt"', ...defaultTheme.fontFamily.sans],
        display: ["europa", ...defaultTheme.fontFamily.sans],
        mono: ["CascadiaCode", ...defaultTheme.fontFamily.mono]
      },
      colors: {
        primary: "#2196f3",
        offwhite: "#eee",
        faint: "#fafafa",
        black: "#212121"
      }
    }
  },

  plugins: [require("@tailwindcss/typography")]
};
