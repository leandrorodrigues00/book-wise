/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/env(.*)$",
    "^@/types$",
    "^@/config/(.*)$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/components/ui/(.*)$",
    "^@/components/(.*)$",
    "^@/styles/(.*)$",
    "^@/app/(.*)$",
    "^@/components/shared-components/icons$",
    "",
    "^[./src]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],

  plugins: [
    require("prettier-plugin-tailwindcss"),
    "@ianvs/prettier-plugin-sort-imports",
  ],
};
