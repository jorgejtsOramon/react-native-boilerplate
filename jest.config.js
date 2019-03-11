module.exports = {
  testURL: 'http://localhost/',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
  cacheDirectory: '<rootDir>/.cache',
  setupFilesAfterEnv: [require.resolve('./jest.setup.js')],
  transform: {
    '^.+\\.(ts|tsx)': 'ts-jest',
  },
  testRegex: '(\\.spec|test)\\.(ts|tsx)$',
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  collectCoverageFrom: [
    '!**/dist/**',
    '!**/jest.config.js',
    '!**/lib/**',
    '!**/src/events.mock.ts',
    '!**/src/index.tsx',
    '!**/src/portal.ts',
    '!**/src/store.ts',
    '!**/src/theme.ts',
    '!**/src/utils/**',
    '!**/types/**',
    '**/*.{ts,tsx}',
  ],
};
