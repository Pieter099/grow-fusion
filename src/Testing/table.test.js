import React from 'react';
import { render, screen, within } from '@testing-library/react';
import CropTable from '../Subcomponents/Table';

describe('CropTable component', () => {
  test('renders the crop calendar table', () => {
    render(<CropTable />);

    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  test('renders the Year 1 and Year 2 headings', () => {
    render(<CropTable />);

    expect(
      screen.getByRole('columnheader', { name: 'Year 1' })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('columnheader', { name: 'Year 2' })
    ).toBeInTheDocument();
  });

  test('renders all 24 month columns', () => {
    render(<CropTable />);

    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    monthNames.forEach((month) => {
      expect(
        screen.getAllByRole('columnheader', { name: month })
      ).toHaveLength(2);
    });
  });

  test('renders all six crop rows', () => {
    render(<CropTable />);

    const expectedCrops = [
      '🌿 Barley',
      '🌱 Canola',
      '🌽 Corn',
      '☁ Cotton',
      '🌾 Oats',
      '🌾 Wheat',
    ];

    expectedCrops.forEach((crop) => {
      expect(
        screen.getByRole('row', { name: new RegExp(crop) })
      ).toBeInTheDocument();
    });

    expect(screen.getAllByRole('row')).toHaveLength(8);
  });

  test('renders 24 month cells for each crop', () => {
    render(<CropTable />);

    const cropRows = [
      'Barley',
      'Canola',
      'Corn',
      'Cotton',
      'Oats',
      'Wheat',
    ];

    cropRows.forEach((crop) => {
      const row = screen.getByRole('row', {
        name: new RegExp(crop),
      });

      const cells = within(row).getAllByRole('cell');

      expect(cells).toHaveLength(25);
    });
  });

  test('renders the planting and harvesting legend', () => {
    render(<CropTable />);

    expect(screen.getByText('Planting')).toBeInTheDocument();
    expect(screen.getByText('Harvesting')).toBeInTheDocument();
  });

  test('marks planting and harvesting cells with the correct classes', () => {
    render(<CropTable />);

    const plantingCells = screen.getAllByRole('cell').filter((cell) =>
      cell.classList.contains('planting')
    );

    const harvestingCells = screen.getAllByRole('cell').filter((cell) =>
      cell.classList.contains('harvesting')
    );

    expect(plantingCells.length).toBeGreaterThan(0);
    expect(harvestingCells.length).toBeGreaterThan(0);
  });
});