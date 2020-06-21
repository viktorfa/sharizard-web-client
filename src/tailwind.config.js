/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      width: {
        content: "1200px",
      },
      maxWidth: {
        content: "1200px",
      },
      colors: {
        t1: "#fafafa",
        b1: "#ee8327",
        b12: "#ce5140",
        b2: "#227394",
        b22: "#0b4252",
      },
    },
  },
  variants: {},
  plugins: [],
  purge: ["./**/*.vue"],
};
