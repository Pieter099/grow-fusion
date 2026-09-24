import { getWeatherData } from "../API/weatherAPI";

describe("getWeatherData", () => {
    beforeEach(() => {
        // Mock the fetch function before each test
        global.fetch = jest.fn();
    });

    afterEach(() => {
        // Clear all mocks after each test
        jest.clearAllMocks();
    });

    test("Throws an error for invalid coordinates", async () => {
        await expect(getWeatherData(NaN, 28.2293)).rejects.toThrow("Invalid latitude or longitude");

        await expect(getWeatherData(-25.7479, NaN)).rejects.toThrow("Invalid latitude or longitude");
    });

    test("calls the weather API with the correct URL", async () => {
        const mockWeatherData = {
            current: {},
            daily: {}
        };

        global.fetch.mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockWeatherData)
        });



        await getWeatherData(-25.7479, 28.2293);

        expect(global.fetch).toHaveBeenCalledWith(
            expect.stringContaining("https://api.open-meteo.com/v1/forecast")
        );

        expect(global.fetch).toHaveBeenCalledWith(
            expect.stringContaining("latitude=-25.7479")
        );

        expect(global.fetch).toHaveBeenCalledWith(
            expect.stringContaining("longitude=28.2293")
        );

        test("returns weather data when the API request succeeds", async () => {
            const mockWeatherData = {
                current: {
                    temperature_2m: 24
                },
                daily: {
                    time: ["2026-09-23"]
                }
            };

            global.fetch.mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockWeatherData)
            });

            const result = await getWeatherData(-25.7479, 28.2293);

            expect(result).toEqual(mockWeatherData);
        });

        test("throws an error when the API request fails", async () => {
            global.fetch.mockResolvedValue({
                ok: false,
                status: 500,
                text: jest.fn().mockResolvedValue("Server Error")
            });

            await expect(getWeatherData(-25.7479, 28.2293)).rejects.toThrow("Server Error");
        });

        test("uses the HTTP status when the API returns an emty error response", async () => {
            global.fetch.mockResolvedValue({
                ok: false,
                status: 503,
                text: jest.fn().mockResolvedValue("")
            });

            await expect(getWeatherData(-25.7479, 28.2293)).rejects.toThrow("Weather API request failed with status 503");
        });
    });
});