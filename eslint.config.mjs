import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // Example: No unused variables
      "no-unused-vars": ["warn"],

      // Example: Disallow console.log except for warnings and errors
      "no-console": ["warn", { allow: ["warn", "error"] }]
    }
  },
  // Prettier config must be last to override conflicting ESLint rules
  prettierConfig,
]);

export default eslintConfig;
