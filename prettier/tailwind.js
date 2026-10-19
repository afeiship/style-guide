// @ts-check
const baseConfig = require(".");

/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */

const config = {
  ...baseConfig,
  plugins: ["prettier-plugin-tailwindcss"]
};

module.exports = config;
