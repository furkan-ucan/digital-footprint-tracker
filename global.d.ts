// This file is referenced in the tsconfig.json file

// Mock @testing-library/jest-dom types if they're not available
declare module '@testing-library/jest-dom' {
  // Empty declaration to prevent TypeScript errors
}

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}
