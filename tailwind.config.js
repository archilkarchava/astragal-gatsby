module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  purge: {
    content: ["./src/**/*.{tsx,jsx,js}"],
    css: ["./src/styles/global.css"],
  },
  corePlugins: {
    backgroundOpacity: false,
    textOpacity: false,
  },
}
