const { createGlobPatternsForDependencies } = require("@nrwl/next/tailwind");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  presets: [require("../../tailwind-workspace-preset.js")],
  purge: createGlobPatternsForDependencies(__dirname),
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Code", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
