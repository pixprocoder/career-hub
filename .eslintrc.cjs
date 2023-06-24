// eslint-disable-next-line no-undef
module.exports = {
  rules: {
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^React$",
      },
    ],
  },
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
};
