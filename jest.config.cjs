const config = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/apps', '<rootDir>/packages'],
  testMatch: ['**/?(*.)+(test|spec).[tj]s?(x)'],
  moduleNameMapper: {
    '^@shared-ui$': '<rootDir>/packages/shared-ui/src/index.ts',
    '^@shared-ui/(.*)$': '<rootDir>/packages/shared-ui/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: '<rootDir>/tsconfig.jest.json',
      },
    ],
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/coverage/'],
  collectCoverageFrom: ['apps/**/*.{ts,tsx}', 'packages/**/*.{ts,tsx}', '!**/*.d.ts'],
  coverageDirectory: '<rootDir>/coverage',
};

module.exports = config;
