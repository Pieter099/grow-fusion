import React from 'react';
import { render, screen } from '@testing-library/react';
import CropCare from '../Subcomponents/cropCare';

describe('CropCare component', () => {
  test('renders the main crop care heading', () => {
    render(<CropCare />);

    expect(
      screen.getByRole('heading', {
        name: 'Additional information on Fertilizing and Herbicide:',
      })
    ).toBeInTheDocument();
  });

  test('renders the fertilizing and herbicide introduction', () => {
    render(<CropCare />);

    expect(
      screen.getByText(
        /Fertilizers and herbicides are crucial components of modern agriculture/i
      )
    ).toBeInTheDocument();
  });

  test('renders the fertilizer and herbicide information images', () => {
    render(<CropCare />);

    expect(screen.getByAltText('Fertilizer')).toBeInTheDocument();
    expect(screen.getByAltText('Herbicide')).toBeInTheDocument();
  });

  test('renders all fertilizer and herbicide step images', () => {
    render(<CropCare />);

    for (let step = 1; step <= 7; step += 1) {
      expect(
        screen.getAllByAltText(`Step ${step}`)
      ).toHaveLength(2);
    }
  });

  test('loads all Crop Care images lazily', () => {
    render(<CropCare />);

    const images = screen.getAllByRole('img');

    expect(images).toHaveLength(16);

    images.forEach((image) => {
      expect(image).toHaveAttribute('loading', 'lazy');
    });
  });

  test('renders the fertilizer and herbicide step headings', () => {
    render(<CropCare />);

    expect(
      screen.getByRole('heading', {
        name: 'Fertilizing steps:',
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', {
        name: 'Herbicide steps:',
      })
    ).toBeInTheDocument();
  });

  test('renders both fertilizer and herbicide step introductions', () => {
    render(<CropCare />);

    expect(
      screen.getByText(
        'Here is a step-by-step guide to applying fertilizer:'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Here is a step-by-step guide to applying herbicides:'
      )
    ).toBeInTheDocument();
  });

  test('renders all Crop Care list items', () => {
    render(<CropCare />);

    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(16);
  });
});