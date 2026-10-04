const { test, expect } = require('@playwright/test');

const mockWeatherData = {
  current: {
    temperature_2m: 25,
    apparent_temperature: 27,
    relative_humidity_2m: 60,
    precipitation: 1.2,
    rain: 0.8,
    surface_pressure: 1015,
    wind_speed_10m: 12,
    weather_code: 2,
  },

  daily: {
    time: [
      '2026-10-04',
      '2026-10-05',
      '2026-10-06',
      '2026-10-07',
      '2026-10-08',
      '2026-10-09',
      '2026-10-10',
    ],

    weather_code: [2, 1, 3, 61, 0, 63, 80],

    temperature_2m_max: [
      28,
      29,
      25,
      23,
      27,
      24,
      26,
    ],

    temperature_2m_min: [
      15,
      16,
      14,
      13,
      15,
      14,
      16,
    ],

    rain_sum: [
      0,
      0,
      1.5,
      4,
      0,
      3,
      2,
    ],

    wind_speed_10m_max: [
      18,
      20,
      16,
      22,
      15,
      19,
      21,
    ],
  },
};

const mockCapeTownCoordinates = {
  results: [
    {
      latitude: -33.9249,
      longitude: 18.4241,
      name: 'Cape Town',
      country: 'South Africa',
    },
  ],
};

test.describe('GrowFusion Weather', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/v1/forecast*', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockWeatherData),
      });
    });

    await page.route('**/v1/search*', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(mockCapeTownCoordinates),
      });
    });
  });

  test('displays the weather section', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', {
      name: 'Farm Info',
    }).click();

    await expect(
      page.getByRole('heading', {
        name: 'Farming Information',
      })
    ).toBeVisible();

    await expect(
      page.getByRole('heading', {
        name: 'Farm Conditions',
      })
    ).toBeVisible();

    const currentWeather = page.getByRole('region', {
      name: 'Current weather',
    });

    await expect(
      currentWeather.getByText('Partly Cloudy', {
        exact: true,
      })
    ).toBeVisible();

    await expect(
      currentWeather.getByText('25°C', {
        exact: true,
      })
    ).toBeVisible();

    await expect(
      currentWeather.getByText('60%', {
        exact: true,
      })
    ).toBeVisible();
  });

  test('allows the user to search for a different city', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', {
      name: 'Farm Info',
    }).click();

    const searchInput = page.getByPlaceholder(
      'Search any city...'
    );

    await searchInput.fill('Cape Town');

    await page.getByRole('button', {
      name: 'Search',
    }).click();

    await expect(
      page.getByRole('heading', {
        name: 'Cape Town, South Africa',
      })
    ).toBeVisible();

    const currentWeather = page.getByRole('region', {
      name: 'Current weather',
    });

    await expect(
      currentWeather.getByText('25°C', {
        exact: true,
      })
    ).toBeVisible();

    await expect(
      currentWeather.getByText('Partly Cloudy', {
        exact: true,
      })
    ).toBeVisible();
  });
});