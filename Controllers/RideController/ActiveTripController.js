import RideService from "../../Services/RideService";

const ActiveTripController = async (req, res) => {
    const rideService = new RideService();
    const response = await rideService.getActiveTripIfAny(req.user.id);
    return res.json(response);
}
export default ActiveTripController;