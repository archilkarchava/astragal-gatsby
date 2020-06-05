const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  target: "ie11",
  theme: {
    extend: {
      height: {
        18: "4.5rem",
        26: "6.5rem",
        62.5: "15.625rem",
        82: "20.5rem",
        84: "21rem",
        88: "22rem",
        90: "22.5rem",
        112: "28rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
      },
      width: {
        18: "4.5rem",
        26: "6.5rem",
        62.5: "15.625rem",
        82: "20.5rem",
        84: "21rem",
        88: "22rem",
        90: "22.5rem",
        112: "28rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
      },
      margin: {
        17: "4.25rem",
      },
      padding: {
        17: "4.25rem",
      },
      minHeight: {
        20: "5rem",
      },
      minWidth: {
        20: "5rem",
      },
      inset: {
        "-full": "-100%",
      },
    },
    fontFamily: {
      sans: ['"Source Sans Pro"', ...defaultTheme.fontFamily.sans],
      serif: ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
    },
    colors: {
      ...defaultTheme.colors,
      primary: {
        100: "#FFFAF9",
        200: "#FEF1EF",
        300: "#FDE9E5",
        400: "#FCD9D2",
        500: "#FBC8BF",
        600: "#E2B4AC",
        700: "#977873",
        800: "#715A56",
        900: "#4B3C39",
      },
    },
  },
  variants: {
    borderWidth: ["responsive", "first", "last", "hover", "focus"],
    margin: ["responsive", "first", "last", "hover", "focus"],
    padding: ["responsive", "first", "last", "hover", "focus"],
    backgroundColor: ["responsive", "first", "last", "hover", "focus"],
  },
  plugins: [require("@tailwindcss/ui")],
  purge: {
    content: ["./src/**/*.{tsx,jsx,js}"],
    css: ["./src/styles/global.css"],
  },
  // corePlugins: {
  //   backgroundOpacity: false,
  //   textOpacity: false,
  // },
}
