import { render, screen } from '@testing-library/react';
import App from './App';

// Mock dependencies
jest.mock('@tanstack/react-query', () => ({
  QueryClient: jest.fn().mockImplementation(() => ({})),
  QueryClientProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  Routes: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  Route: () => <div>Mocked Route</div>,
}));

describe('App Component', () => {
  it('renders the header with app title', () => {
    render(<App />);
    expect(screen.getByText('Digital Footprint Tracker')).toBeInTheDocument();
  });
});
