module.exports = {
  extends: ["airbnb", "prettier"],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    "no-underscore-dangle": [2, { allow: [] }],
    camelcase: 0,
    "no-unused-vars": ["error", { args: "none", ignoreRestSiblings: true }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        tsx: "never",
        ts: "never",
        js: "never",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.tsx", "**/*.spec.tsx"] },
    ],
    "max-len": [
      "warn",
      {
        code: 120,
        tabWidth: 4,
        comments: 220,
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "max-lines": [
      "warn",
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".d.ts", ".js"],
      },
    },
  },
};
