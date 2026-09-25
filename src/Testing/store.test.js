import store from "../Redux/store";
import { fetchWeatherData } from "../Redux/weatherSlice";

describe("Redux store", () => {
    test("configures the weather reducer correctly", () => {
        expect(store.getState().weather).toEqual({
            weather: {},
            status: "idle",
            error: null,
        });

        store.dispatch(
            fetchWeatherData.pending("test-request-id", {
                latitude: -25.7479,
                longitude: 28.2293
            })
        );

        expect(store.getState().weather.status).toBe("loading");
    });
});