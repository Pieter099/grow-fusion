import React from 'react';
import { render, screen } from '@testing-library/react';
import SoilPrep from '../Subcomponents/soilPrep';

describe('SoilPrep component', () => {
  test('renders the soil preparation heading', () => {
    render(<SoilPrep />);

    expect(
      screen.getByRole('heading', {
        name: 'Preparing your soil:',
      })
    ).toBeInTheDocument();
  });

  test('renders the soil preparation introduction', () => {
    render(<SoilPrep />);

    expect(
      screen.getByText(
        /Preparing soil for crop planting using farming machinery involves several key steps/i
      )
    ).toBeInTheDocument();
  });

  test('renders all nine soil preparation step images', () => {
    render(<SoilPrep />);

    for (let step = 1; step <= 9; step += 1) {
      expect(
        screen.getByAltText(`Step ${step}`)
      ).toBeInTheDocument();
    }
  });

  test('loads all soil preparation images lazily', () => {
    render(<SoilPrep />);

    const images = screen.getAllByRole('img');

    expect(images).toHaveLength(10);

    images.forEach((image) => {
      expect(image).toHaveAttribute('loading', 'lazy');
    });
  });

  test('renders the soil preparation video link correctly', () => {
    render(<SoilPrep />);

    const videoLink = screen.getByRole('link', {
      name: 'Video showing farmers preparing a field for planting',
    });

    expect(videoLink).toHaveAttribute(
      'href',
      'https://youtu.be/jqa2ywtDwJc'
    );

    expect(videoLink).toHaveAttribute('target', '_blank');
    expect(videoLink).toHaveAttribute(
      'rel',
      'noopener noreferrer'
    );
  });

  test('renders the FAO soil preparation resource link', () => {
    render(<SoilPrep />);

    const visitLink = screen.getByRole('link', {
      name: 'Visit',
    });

    expect(visitLink).toHaveAttribute(
      'href',
      'https://www.fao.org/4/y4360e/y4360e0a.htm?utm_source=chatgpt.com'
    );

    expect(visitLink).toHaveAttribute('target', '_blank');
    expect(visitLink).toHaveAttribute(
      'rel',
      'noopener noreferrer'
    );
  });

  test('renders all nine soil preparation steps', () => {
    render(<SoilPrep />);

    const listItems = screen.getAllByRole('listitem');

    expect(listItems).toHaveLength(10);
  });
});