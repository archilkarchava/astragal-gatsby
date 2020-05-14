/* eslint-disable @typescript-eslint/no-var-requires */

const postcssPresetEnv = require("postcss-preset-env")
const tailwindCss = require("tailwindcss")

module.exports = {
  plugins: [
    tailwindCss,
    postcssPresetEnv({
      stage: 0,
      browsers: "> 1%",
      importFrom: ["src/styles/global.css"],
    }),
  ],
}
