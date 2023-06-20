import GeolocationService from "../../Services/GeolocationService";
const ReverseGeocodeController = async (req, res) => {
    const geolocationService = new GeolocationService();
    const response = await geolocationService.getReverseGeocoding(req.query.longitude, req.query.latitude);
    return res.json(response);
}

export default ReverseGeocodeController;