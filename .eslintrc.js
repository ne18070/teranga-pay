module.exports = {
  root: true,
  extends: [
    "universe/native",
    "plugin:@tanstack/eslint-plugin-query/recommended",
  ],
  rules: {
    // C
    camelcase: "warn",
    "capitalized-comments": "off",
    // D
    "default-param-last": ["error"],
    // E
    eqeqeq: "error",
    // I
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "object",
          "type",
          "index",
          "unknown",
        ],
        "newlines-between": "always",
        pathGroups: [
          {
            pattern: "expo**",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "react**",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@/asset/s**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/components/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "@/constants/**",
            group: "internal",
            position: "after",
          },
        ],
        distinctGroup: true,
        pathGroupsExcludedImportTypes: ["react"],
        alphabetize: {
          order:
            "asc" /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */,
          orderImportKind: "asc",
          caseInsensitive: true /* ignore case. Options: [true, false] */,
        },
        warnOnUnassignedImports: true,
      },
    ],
    // M
    "max-params": ["warn", 3],
    // N
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-empty-function": "warn",
    "no-param-reassign": "error",
    // P
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "function" },
      { blankLine: "always", prev: "*", next: "block-like" },

      { blankLine: "always", prev: ["import"], next: "*" },
      {
        blankLine: "any",
        prev: ["import"],
        next: ["import"],
      },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
    "prefer-const": "error",
    "prefer-object-spread": "warn",
    // R
    "require-await": "error",
    // S
    "sort-vars": "error",
    "sort-imports": ["off"],

    // React
    "react/jsx-newline": "warn",
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react/jsx-sort-props": ["warn", { ignoreCase: true }],

    // Ensures props and state inside functions are always up-to-date
    "react-hooks/exhaustive-deps": "warn",
  },
};
