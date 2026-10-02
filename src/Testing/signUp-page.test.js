import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUpPage from '../Pages/SignUp-page';

jest.mock(
  'react-router-dom',
  () => ({
    Link: ({ to, children, ...props }) => (
      <a href={to} {...props}>
        {children}
      </a>
    ),
  }),
  { virtual: true }
);

jest.mock('../Features/SignUp', () => () => (
  <div data-testid="mock-sign-up">
    SignUp
  </div>
));

describe('SignUpPage component', () => {
  test('renders the Home button', () => {
    render(<SignUpPage />);

    expect(
      screen.getByRole('button', {
        name: 'Home',
      })
    ).toBeInTheDocument();
  });

  test('links the Home button to the homepage', () => {
    render(<SignUpPage />);

    const homeLink = screen.getByRole('link', {
      name: 'Home',
    });

    expect(homeLink).toHaveAttribute('href', '/');
  });

  test('renders the account creation heading', () => {
    render(<SignUpPage />);

    expect(
      screen.getByRole('heading', {
        name: 'Create Your GrowFusion Account!',
      })
    ).toBeInTheDocument();
  });

  test('renders the GrowFusion introduction heading and text', () => {
    render(<SignUpPage />);

    expect(
      screen.getByRole('heading', {
        name: 'Grow Smarter with GrowFusion!',
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Join GrowFusion and access essential farming tools in one place/i
      )
    ).toBeInTheDocument();
  });

  test('renders the SignUp component', () => {
    render(<SignUpPage />);

    expect(
      screen.getByTestId('mock-sign-up')
    ).toBeInTheDocument();
  });
});