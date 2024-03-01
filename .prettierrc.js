/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  printWidth: 120,
  arrowParens: 'avoid',
  endOfLine: 'lf',
  overrides: [
    {
      files: ['.json'],
      options: {
        parser: 'json',
        trailingComma: 'all',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        printWidth: 120,
        arrowParens: 'avoid',
        endOfLine: 'lf',
      },
    },
    {
      files: ['.md'],
      options: {
        parser: 'json',
        trailingComma: 'all',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        printWidth: 120,
        arrowParens: 'avoid',
        endOfLine: 'lf',
      },
    },
  ],
}
