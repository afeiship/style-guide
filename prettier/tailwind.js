// @ts-check
const baseConfig = require(".");

/** @type {import("prettier").Config} */
const config = {
  ...baseConfig,
  plugins: ["prettier-plugin-tailwind"]
};

module.exports = config;
