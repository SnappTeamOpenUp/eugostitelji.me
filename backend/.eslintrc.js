module.exports = {
  root: true,
  extends: ["eslint:recommended", "prettier", "plugin:import/recommended"],
  rules: {
    "import/order": ["error", { "newlines-between": "always" }],
  },
  env: {
    es2020: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
};
