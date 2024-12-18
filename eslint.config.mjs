import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginA11y from "eslint-plugin-jsx-a11y"; // Add this import

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "jsx-a11y": pluginA11y, // Use the plugin as an object here
    },
    rules: {
      // Alternative rule: Ensure valid anchor tags
      "jsx-a11y/anchor-is-valid": [
        "warn",
        {
          aspects: ["noHref", "invalidHref", "preferButton"],
        },
      ],
      // Ensure alt text for images
      "jsx-a11y/alt-text": [
        "warn",
        {
          elements: ["img", "object", "applet", "area", "input[type='image']"],
        },
      ],
      // Ensure labels are properly associated with form controls
      "jsx-a11y/label-has-associated-control": [
        "warn",
        {
          controlComponents: ["Input", "TextInput", "Textarea", "Select"],
        },
      ],
      // Ensure ARIA roles are used correctly
      "jsx-a11y/no-redundant-roles": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
    },
  },
];
