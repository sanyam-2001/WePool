import RideService from "../../Services/RideService";

const EndTripController = async (req, res) => {
    const rideService = new RideService();
    await rideService.endTrip(req.user, req.body.activeTrip);

    res.json({ success: true });
}

export default EndTripController;