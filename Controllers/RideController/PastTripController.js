import RideService from "../../Services/RideService";

const PastTripController = async (req, res) => {
    const rideService = new RideService();
    const response = await rideService.getPastTrips(req.user.id);
    return res.json(response);
}

export default PastTripController;