const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  target: "ie11",
  theme: {
    extend: {
      height: {
        18: "4.5rem",
        18.5: "4.625rem",
        26: "6.5rem",
        44: "11rem",
        62.5: "15.625rem",
        66: "16.5rem",
        68: "17rem",
        82: "20.5rem",
        84: "21rem",
        86: "21.5rem",
        88: "22rem",
        90: "22.5rem",
        112: "28rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        149: "37.25rem",
      },
      width: {
        18: "4.5rem",
        18.5: "4.625rem",
        26: "6.5rem",
        44: "11rem",
        62.5: "15.625rem",
        66: "16.5rem",
        68: "17rem",
        82: "20.5rem",
        84: "21rem",
        86: "21.5rem",
        88: "22rem",
        90: "22.5rem",
        112: "28rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        149: "37.25rem",
      },
      margin: {
        17: "4.25rem",
      },
      padding: {
        17: "4.25rem",
      },
      minHeight: {
        20: "5rem",
        28: "7rem",
        48: "12rem",
        58: "14.5rem",
        65: "16.25rem",
        100: "25rem",
      },
      minWidth: {
        20: "5rem",
        28: "7rem",
        48: "12rem",
        58: "14.5rem",
        65: "16.25rem",
        100: "25rem",
      },
      inset: {
        "-full": "-100%",
      },
      opacity: {
        99: ".99",
      },
      typography: {
        default: {
          css: {
            color: "#000000",
          },
        },
      },
    },
    fontFamily: {
      sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
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
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/typography")],
  purge: {
    content: ["./src/**/*.{tsx,jsx,js}"],
    css: ["./src/styles/global.css"],
  },
  // corePlugins: {
  //   backgroundOpacity: false,
  //   textOpacity: false,
  // },
}
