import React from 'react';
import { render, screen } from '@testing-library/react';
import CropInfo from '../Subcomponents/cropInfo';

describe('CropInfo component', () => {
  test('renders the crop information heading', () => {
    render(<CropInfo />);

    expect(
      screen.getByRole('heading', {
        name: 'Additional Crop information:',
      })
    ).toBeInTheDocument();
  });

  test('renders the crop information introduction', () => {
    render(<CropInfo />);

    expect(
      screen.getByText(
        /Here is an overview of each crop type, highlighting key factual properties/i
      )
    ).toBeInTheDocument();
  });

  test('renders all six crop images with accessible alternative text', () => {
    render(<CropInfo />);

    expect(screen.getByAltText('Barley')).toBeInTheDocument();
    expect(screen.getByAltText('Canola')).toBeInTheDocument();
    expect(screen.getByAltText('Corn')).toBeInTheDocument();
    expect(screen.getByAltText('Cotton')).toBeInTheDocument();
    expect(screen.getByAltText('Oats')).toBeInTheDocument();
    expect(screen.getByAltText('Wheat')).toBeInTheDocument();

    expect(screen.getAllByRole('img')).toHaveLength(6);
  });

  test('loads all crop images lazily', () => {
    render(<CropInfo />);

    const images = screen.getAllByRole('img');

    images.forEach((image) => {
      expect(image).toHaveAttribute('loading', 'lazy');
    });
  });

  test('renders information for all six crops', () => {
    render(<CropInfo />);

    expect(screen.getByText('Barley')).toBeInTheDocument();
    expect(screen.getByText('Canola')).toBeInTheDocument();
    expect(screen.getByText('Corn')).toBeInTheDocument();
    expect(screen.getByText('Cotton')).toBeInTheDocument();
    expect(screen.getByText('Oats')).toBeInTheDocument();
    expect(screen.getByText('Wheat')).toBeInTheDocument();
  });

  test('renders the crop information list', () => {
    render(<CropInfo />);

    expect(
      screen.getByRole('list')
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole('listitem')
    ).toHaveLength(6);
  });
});