import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import MainNavBar from '../Components/NavBar';

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

describe('MainNavBar', () => {
  test('renders navigation links', () => {
    render(<MainNavBar />);

    expect(screen.getByRole('link', { name: 'Home' }))
      .toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'About Us' }))
      .toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Farm Info' }))
      .toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Contacts' }))
      .toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Sign Up' }))
      .toBeInTheDocument();
  });

  test('Sign Up link points to the signup page', () => {
    render(<MainNavBar />);

    const signUpLink = screen.getByRole('link', {
      name: 'Sign Up',
    });

    expect(signUpLink).toHaveAttribute('href', '/signup');
  });

  test('menu button starts closed', () => {
    render(<MainNavBar />);

    const menuButton = screen.getByRole('button', {
      name: 'Open menu',
    });

    expect(menuButton).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });

  test('clicking the menu button opens the menu', () => {
    render(<MainNavBar />);

    const menuButton = screen.getByRole('button', {
      name: 'Open menu',
    });

    fireEvent.click(menuButton);

    expect(
      screen.getByRole('button', {
        name: 'Close menu',
      })
    ).toBeInTheDocument();

    expect(menuButton).toHaveAttribute(
      'aria-expanded',
      'true'
    );
  });

  test('clicking the menu button again closes the menu', () => {
    render(<MainNavBar />);

    const menuButton = screen.getByRole('button', {
      name: 'Open menu',
    });

    fireEvent.click(menuButton);

    const closeButton = screen.getByRole('button', {
      name: 'Close menu',
    });

    fireEvent.click(closeButton);

    expect(
      screen.getByRole('button', {
        name: 'Open menu',
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('button', {
        name: 'Open menu',
      })
    ).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });
});