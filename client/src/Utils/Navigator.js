import { GET } from "./GET";
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

export const updateGlobalCurrentLocation = async (setCurrentLocation) => {

    const { coords: { longitude, latitude } } = await getCurrentLocation();
    const requestString = `/api/geo/reverseGeocode?longitude=${longitude}&latitude=${latitude}`;
    const { data } = await GET(requestString);
    const locationObject = {
        latitude,
        longitude,
        countryCode: data?.[0]?.country_code
    }
    setCurrentLocation(locationObject);

}