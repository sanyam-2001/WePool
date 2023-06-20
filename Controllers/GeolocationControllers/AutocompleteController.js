import GeolocationService from "../../Services/GeolocationService";

const AutocompleteController = async (req, res) => {
    const geolocationService = new GeolocationService();
    const response = await geolocationService.getAutocompleteSuggestions(req.body.currentLocation, req.body.prompt);
    return res.json(response);
}
export default AutocompleteController;