module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["google", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    createDefaultProgram: true,
  },
  rules: {
    "spaced-comment": "off",
    "require-jsdoc": "off",
    "prettier/prettier": ["error"],
    "import/no-unresolved": "off",
  },
};
