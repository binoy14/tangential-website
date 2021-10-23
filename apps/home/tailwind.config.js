const { createGlobPatternsForDependencies } = require("@nrwl/next/tailwind");

module.exports = {
  presets: [require("../../tailwind-workspace-preset.js")],
  purge: createGlobPatternsForDependencies(__dirname),
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
