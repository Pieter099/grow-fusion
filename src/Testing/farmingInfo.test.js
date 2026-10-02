import React from 'react';
import { render, screen } from '@testing-library/react';
import FarmInfo from '../Components/FarmingInfo';

jest.mock('../Subcomponents/Table', () => () =>
  require('react').createElement(
    'div',
    { 'data-testid': 'mock-crop-table' },
    'CropTable'
  )
);

jest.mock('../Subcomponents/SubNavbar', () => () =>
  require('react').createElement(
    'div',
    { 'data-testid': 'mock-subnavbar' },
    'SubNavbar'
  )
);

jest.mock('../Subcomponents/soilPrep', () => () =>
  require('react').createElement(
    'div',
    { 'data-testid': 'mock-soil-prep' },
    'SoilPrep'
  )
);

jest.mock('../Subcomponents/cropCare', () => () =>
  require('react').createElement(
    'div',
    { 'data-testid': 'mock-crop-care' },
    'CropCare'
  )
);

jest.mock('../Subcomponents/cropInfo', () => () =>
  require('react').createElement(
    'div',
    { 'data-testid': 'mock-crop-info' },
    'CropInfo'
  )
);

jest.mock('../Subcomponents/weather', () => () =>
  require('react').createElement(
    'div',
    { 'data-testid': 'mock-weather' },
    'Weather'
  )
);

describe('FarmInfo component', () => {
  test('renders the Farming Information heading', () => {
    render(<FarmInfo />);

    expect(
      screen.getByRole('heading', {
        name: 'Farming Information',
      })
    ).toBeInTheDocument();
  });

  test('renders the farming information navigation', () => {
    render(<FarmInfo />);

    expect(
      screen.getByTestId('mock-subnavbar')
    ).toBeInTheDocument();
  });

  test('renders the Farm Conditions section', () => {
    render(<FarmInfo />);

    expect(
      screen.getByRole('heading', {
        name: 'Farm Conditions',
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Here is a table that outlines the current conditions of your farm:'
      )
    ).toBeInTheDocument();
  });

  test('renders the Weather component', () => {
    render(<FarmInfo />);

    expect(
      screen.getByTestId('mock-weather')
    ).toBeInTheDocument();
  });

  test('renders the Crop Information component', () => {
    render(<FarmInfo />);

    expect(
      screen.getByTestId('mock-crop-info')
    ).toBeInTheDocument();
  });

  test('renders the Crop Seasons section and CropTable component', () => {
    render(<FarmInfo />);

    expect(
      screen.getByRole('heading', {
        name: 'Crop Seasons:',
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Here is a table that outlines the planting and harvesting seasons for various crops:'
      )
    ).toBeInTheDocument();

    expect(
      screen.getByTestId('mock-crop-table')
    ).toBeInTheDocument();
  });

  test('renders the SoilPrep component', () => {
    render(<FarmInfo />);

    expect(
      screen.getByTestId('mock-soil-prep')
    ).toBeInTheDocument();
  });

  test('renders the CropCare component', () => {
    render(<FarmInfo />);

    expect(
      screen.getByTestId('mock-crop-care')
    ).toBeInTheDocument();
  });
});