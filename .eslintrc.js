//Rules v2: https://github.com/typescript-eslint/typescript-eslint/tree/v2.20.0/packages/eslint-plugin#supported-rules
module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": [

    "eslint:recommended", // https://typescript-eslint.io/linting/configs#eslint-recommended plugins::eslint-plugin-react
    "plugin:react/recommended", // https://typescript-eslint.io/linting/configs#eslint-recommended  plugins::eslint-plugin-react
    "standard-with-typescript", // https://github.com/mightyiam/eslint-config-standard-with-typescript#readme

    "airbnb-typescript",
    "react-app/jest",
    // "plugin:@typescript-eslint/recommended", // https://typescript-eslint.io/linting/typed-linting/monorepos#one-tsconfigjson-per-package-and-an-optional-one-in-the-root
    "plugin:@typescript-eslint/recommended-type-checked", // https://typescript-eslint.io/linting/configs#recommended-type-checked
    "plugin:@typescript-eslint/strict", // https://typescript-eslint.io/linting/configs#strict
    "plugin:@typescript-eslint/strict-type-checked", // https://typescript-eslint.io/linting/configs/#strict-type-checked
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": { // Configure parserOptions to enable support for other ECMAScript versions as well as JSX. https://typescript-eslint.io/linting/typed-linting/monorepos#one-tsconfigjson-per-package-and-an-optional-one-in-the-root
    "project": ["./tsconfig.base.json"],
    "ecmaVersion": "ES2021",
    "sourceType": "module",
    "tsconfigRootDir": __dirname,
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "tsx": true
    }
  },
  "plugins": [
    "react",
    "eslint-plugin-react",
    "@typescript-eslint",
    "@stylistic",
    "@stylistic/js",
    "@stylistic/eslint-plugin-ts",
    "@stylistic/jsx",
    "@stylistic/eslint-plugin-plus"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "quotes": "off",
    "import/extensions": [ // укзываем расширение файлов?
      "error",
      "ignorePackages",
      {
        "ts": "always",
        "tsx": "always"
      }
    ],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error", {
      ignoreTypeValueShadow: true,
      ignoreFunctionTypeParameterNameValueShadow: true
    }],
    "react/display-name": ["error", { ignoreTranspilerName: true, displayName: true }],
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/no-explicit-any": ["error", { fixToUnknown: false, ignoreRestArgs: true }],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/consistent-type-imports": "off", // ключевое слово при импорте
    "@typescript-eslint/no-unnecessary-condition": "off", // if else for, while, &&, || and ?:
    "no-unused-vars": "off",
    "@typescript-eslint/await-thenable": "off",
    "@typescript-eslint/no-unused-vars": "off", // Запретить использование неиспользуемых переменных
    // "no-extraneous-dependencies": "off", // 
    "@typescript-eslint/no-unsafe-assignment": "off", // Запретить присваивание значений с типом any переменным и свойствам.
    "@typescript-eslint/no-unsafe-call": "off", // Запретить вызов значения с типом any.
    "@stylistic/ts/member-delimiter-style": [ // TypeScript - три разделителя между элементами в интерфейсах и псевдонимах типов
      "error", {
        "multiline": {
          "delimiter": "none", // ' ' ',' ';'
          "requireLast": false // последняя строка
        }
      }
    ],
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "off",
    "@typescript-eslint/strict-boolean-expressions": "error",
    "@typescript-eslint/prefer-nullish-coalescing": ["error", { ignoreTernaryTests: true }],
    "require-await": "off",
    "@typescript-eslint/require-await": "error",
    "@typescript-eslint/restrict-template-expressions": ["error", {
      "allowAny": true,
      "allowBoolean": true,
      "allowNullish": true,
      "allowNumber": true,
      "allowRegExp": true,
    },],
    "@typescript-eslint/no-redundant-type-constituents": "off",
    "@typescript-eslint/non-nullable-type-assertion-style": "off",
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ["error", { // конечная запятая
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "never"

    }],
    "import/no-extraneous-dependencies": "off", // импорт внешних модулей
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",

  },
  "ignorePatterns": [
    "./*.config.js",
    "./*.dev.js",
    "./**/*.config.js",
    "./**/*.dev.js",
    "./custom.d.ts",
    "./*.js",
    "./dist/*.js",
    "./dist/**/*.js"
  ]
}
