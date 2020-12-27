// eslint-disable-next-line @typescript-eslint/no-var-requires
const hq = require('alias-hq');

module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testPathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  moduleNameMapper: hq.get('jest'),
};
