module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  testMatch: ['<rootDir>/__tests__/**'],
};
