/**
 * "plugin:vue/base" ... Settings and rules to enable correct ESLint parsing.
 *
 * "plugin:vue/vue3-essential" ... base, plus rules to prevent errors or unintended behavior.
 *
 * "plugin:vue/vue3-strongly-recommended" ... Above, plus rules to considerably improve code readability and/or dev experience.
 *
 * "plugin:vue/vue3-recommended" ... Above, plus rules to enforce subjective community defaults to ensure consistency.
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/typescript/recommended",
    // "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    // "@typescript-eslint/no-explicit-any": "off",
    "vue/require-default-prop": "off",
    "vue/no-v-html": "off",
    indent: "off",
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
};
