import RideService from '../../Services/RideService';
const GetRideController = async (req, res) => {
    const rideService = new RideService();
    const response = await rideService.handleRideRequest(req);
    return res.json(response);
}

export default GetRideController;