import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../Pages/HomePage';

jest.mock('../Components/Home', () => () => (
  <div data-testid="mock-home">Home</div>
));

jest.mock('../Components/About', () => () => (
  <div data-testid="mock-about">About</div>
));

jest.mock('../Components/FarmingInfo', () => () => (
  <div data-testid="mock-farm-info">FarmInfo</div>
));

jest.mock('../Components/Contacts', () => () => (
  <div data-testid="mock-contacts">Contacts</div>
));

describe('HomePage component', () => {
  test('renders the Home component', () => {
    render(<HomePage />);

    expect(
      screen.getByTestId('mock-home')
    ).toBeInTheDocument();
  });

  test('renders the About component', () => {
    render(<HomePage />);

    expect(
      screen.getByTestId('mock-about')
    ).toBeInTheDocument();
  });

  test('renders the FarmInfo component', () => {
    render(<HomePage />);

    expect(
      screen.getByTestId('mock-farm-info')
    ).toBeInTheDocument();
  });

  test('renders the Contacts component', () => {
    render(<HomePage />);

    expect(
      screen.getByTestId('mock-contacts')
    ).toBeInTheDocument();
  });

  test('renders all four homepage sections together', () => {
    render(<HomePage />);

    expect(
      screen.getByTestId('mock-home')
    ).toBeInTheDocument();

    expect(
      screen.getByTestId('mock-about')
    ).toBeInTheDocument();

    expect(
      screen.getByTestId('mock-farm-info')
    ).toBeInTheDocument();

    expect(
      screen.getByTestId('mock-contacts')
    ).toBeInTheDocument();
  });
});