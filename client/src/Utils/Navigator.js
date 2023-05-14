import { POST } from "./POST";
export const getCurrentLocation = async () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((location) => resolve(location), (err) => reject(err));
    });
}

export const getAutocompleteSuggestions = async (prompt) => {
    const location = await getCurrentLocation();
    const response = await POST("/api/geo/autocomplete", {
        currentLocation: location,
        prompt
    });
    return response;
}