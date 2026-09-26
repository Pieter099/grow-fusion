import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Components/Home';

describe('Home component', () => {
  test('renders the home section', () => {
    render(<Home />);

    const homeSection = document.querySelector('#home');

    expect(homeSection).toBeInTheDocument();
    expect(homeSection).toHaveClass('head');
  });

  test('renders the GrowFusion heading', () => {
    render(<Home />);

    expect(
      screen.getByRole('heading', { name: 'GrowFusion' })
    ).toBeInTheDocument();
  });

  test('renders the farming subtitle', () => {
    render(<Home />);

    expect(
      screen.getByText('"Farming smarter with Real-Time insights!"')
    ).toBeInTheDocument();
  });

  test('renders the farming landscape image with accessible text', () => {
    render(<Home />);

    const image = screen.getByAltText('Farming landscape');

    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('mainImg');
  });

  test('renders responsive image attributes', () => {
    render(<Home />);

    const image = screen.getByAltText('Farming landscape');

    expect(image).toHaveAttribute('srcSet');
    expect(image).toHaveAttribute('sizes', '100vw');
    expect(image).toHaveAttribute('width', '1792');
    expect(image).toHaveAttribute('height', '1024');
  });
});
