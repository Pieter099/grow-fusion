import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutInfo from '../Components/About';

describe('AboutInfo component', () => {
  test('renders the About Grow Fusion heading', () => {
    render(<AboutInfo />);

    expect(
      screen.getByRole('heading', {
        name: 'About Grow Fusion',
      })
    ).toBeInTheDocument();
  });

  test('renders the GrowFusion logo with accessible alternative text', () => {
    render(<AboutInfo />);

    const logo = screen.getByAltText('site-logo');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass('logo-img');
  });

  test('loads the logo lazily', () => {
    render(<AboutInfo />);

    const logo = screen.getByAltText('site-logo');

    expect(logo).toHaveAttribute('loading', 'lazy');
  });

  test('renders the About Grow Fusion description', () => {
    render(<AboutInfo />);

    expect(
      screen.getByText(
        /Grow Fusion is a modern agricultural information platform designed to help farmers/i
      )
    ).toBeInTheDocument();
  });
});