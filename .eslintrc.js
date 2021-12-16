module.exports = {
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  plugins: ["react-hooks"],
  rules: {
    "react/prop-types": 2,
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "var", next: "return" },
    ],
  },
};
