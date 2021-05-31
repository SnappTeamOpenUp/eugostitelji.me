const fs = require("fs");
const path = require("path");

const stubs = fs.readFileSync(
  path.join(__dirname, "../backend/stubs.graphql"),
  "utf8"
);
const schema = fs.readFileSync(
  path.join(__dirname, "../backend/schema.graphql"),
  "utf8"
);

module.exports = {
  root: true,
  extends: "react-app",
  plugins: ["graphql"],
  rules: {
    "import/order": ["warn", { "newlines-between": "always" }],
    "graphql/template-strings": [
      "error",
      {
        schemaString: stubs + schema,
      },
    ],
  },
};
