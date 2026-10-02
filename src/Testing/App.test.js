import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

let mockCurrentPath = '/';

jest.mock(
  'react-router-dom',
  () => {
    const React = jest.requireActual('react');

    return {
      BrowserRouter: ({ children }) => <>{children}</>,

      Routes: ({ children }) => <>{children}</>,

      Route: ({ path, element }) =>
        path === mockCurrentPath ? element : null,

      useLocation: () => ({
        pathname: mockCurrentPath,
      }),
    };
  },
  { virtual: true }
);

jest.mock('../Components/NavBar', () => () => (
  <nav data-testid="mock-navbar">Navbar</nav>
));

jest.mock('../Pages/HomePage', () => () => (
  <div data-testid="mock-home-page">HomePage</div>
));

jest.mock('../Pages/SignUp-page', () => () => (
  <div data-testid="mock-sign-up-page">SignUpPage</div>
));

describe('App component', () => {
  beforeEach(() => {
    mockCurrentPath = '/';
  });

  test('renders the HomePage and Navbar on the homepage', () => {
    render(<App />);

    expect(
      screen.getByTestId('mock-navbar')
    ).toBeInTheDocument();

    expect(
      screen.getByTestId('mock-home-page')
    ).toBeInTheDocument();

    expect(
      screen.queryByTestId('mock-sign-up-page')
    ).not.toBeInTheDocument();
  });

  test('renders the SignUpPage and hides the Navbar on the signup page', () => {
    mockCurrentPath = '/signup';

    render(<App />);

    expect(
      screen.getByTestId('mock-sign-up-page')
    ).toBeInTheDocument();

    expect(
      screen.queryByTestId('mock-navbar')
    ).not.toBeInTheDocument();

    expect(
      screen.queryByTestId('mock-home-page')
    ).not.toBeInTheDocument();
  });

  test('does not render a page component for an unknown route', () => {
    mockCurrentPath = '/unknown-route';

    render(<App />);

    expect(
      screen.queryByTestId('mock-home-page')
    ).not.toBeInTheDocument();

    expect(
      screen.queryByTestId('mock-sign-up-page')
    ).not.toBeInTheDocument();

    expect(
      screen.getByTestId('mock-navbar')
    ).toBeInTheDocument();
  });
});