import { getCoordinates } from "../API/geocodingAPI";

describe("getCoordinates", () => {
    beforeEach(() => {
        global.fetch = jest.fn();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("throws an error when the city name is invalid", async () => {
        await expect(
            getCoordinates("")
        ).rejects.toThrow("Enter a valid city name");

        await expect(
            getCoordinates("   ")
        ).rejects.toThrow("Enter a valid city name");

        await expect(
            getCoordinates(null)
        ).rejects.toThrow("Enter a valid city name");
    });

    test("calls the geocoding API with the trimmed and encoded city name", async () => {
        global.fetch.mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue({
                results: [
                    {
                        latitude: -25.7479,
                        longitude: 28.2293,
                        name: "Pretoria",
                        country: "South Africa"
                    }
                ]
            })
        });

        await getCoordinates("  Pretoria  ");

        expect(global.fetch).toHaveBeenCalledWith(
            "https://geocoding-api.open-meteo.com/v1/search?name=Pretoria&count=1"
        );
    });

    test("returns coordinates and location information when the request succeeds", async () => {
        const mockData = {
            results: [
                {
                    latitude: -25.7479,
                    longitude: 28.2293,
                    name: "Pretoria",
                    country: "South Africa"
                }
            ]
        };

        global.fetch.mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(mockData)
        });

        const result = await getCoordinates("Pretoria");

        expect(result).toEqual({
            latitude: -25.7479,
            longitude: 28.2293,
            name: "Pretoria",
            country: "South Africa"
        });
    });

    test("throws an error when the API request fails", async () => {
        global.fetch.mockResolvedValue({
            ok: false,
            status: 500,
            text: jest.fn().mockResolvedValue("Geocoding server error")
        });

        await expect(
            getCoordinates("Pretoria")
        ).rejects.toThrow("Geocoding server error");
    });

    test("throws an error when no city results are returned", async () => {
        global.fetch.mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue({
                results: []
            })
        });

        await expect(
            getCoordinates("NotARealCity")
        ).rejects.toThrow("City not found");
    });
});