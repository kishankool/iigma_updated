import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default [
  { languageOptions: { globals: globals.browser } },
  { ...pluginJs.configs.recommended, fix: true }, // Enable fix for JavaScript
  { ...pluginReactConfig, fix: true }, // Enable fix for React
];
