const path = require('path')

module.exports = {
  '*.{js,ts,tsx}': [
    'prettier --check',
    (filenames) =>
      `next lint --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`,
  ],
}
