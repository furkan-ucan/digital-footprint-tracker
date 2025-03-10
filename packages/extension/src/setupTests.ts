import '@testing-library/jest-dom';

// Mock Chrome API
// Use 'window' instead of 'global' for browser extensions
window.chrome = {
  runtime: {
    onMessage: {
      addListener: jest.fn(),
    },
  },
} as unknown as typeof chrome;

// Global mocks or test environment setup can go here
