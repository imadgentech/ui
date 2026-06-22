module.exports = {
  'src/**/*.{ts,tsx}': [
    'eslint --fix',
    () => 'tsc --noEmit',
  ],
}
