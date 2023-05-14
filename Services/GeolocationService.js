import axios from 'axios';
import Response from '../dto/Response';

class GeolocationService {
    constructor() {
        // No Args Constructor
    }

    getAutocompleteSuggestions = async (currentLocationInfo, prompt) => {
        const { longitude, latitude } = this.#resolveLocationObject(currentLocationInfo);
        const reverseGeocodePayload = await this.getReverseGeocoding(longitude, latitude);
        const currentCountry = reverseGeocodePayload?.[0]?.country_code || 'in';
        const requestString = `https://api.geoapify.com/v1/geocode/autocomplete?text=${prompt}&lang=en&limit=10&filter=countrycode:${currentCountry}&bias=proximity:${longitude},${latitude}|countrycode:none&format=json&apiKey=${process.env.GEOAPI_KEY}`;
        const { data } = await axios.get(requestString);
        return new Response().success(data?.results || []);
    }

    getReverseGeocoding = async (longitude, latitude) => {
        const requestString = `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&lang=en&limit=1&format=json&apiKey=${process.env.GEOAPI_KEY}`
        const { data } = await axios.get(requestString);
        return new Response().success(data);
    }

    #resolveLocationObject = (locationObject) => {
        return {
            longitude: locationObject?.coords?.longitude,
            latitude: locationObject?.coords?.latitude,
        }
    }
}

export default GeolocationService;