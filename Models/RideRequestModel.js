import mongoose from "mongoose";
import GeoLocationSchema from './GeoLocationModel';
const rideRequest = mongoose.Schema({
    userId: {
        type: String
    },
    startLocation: {
        type: GeoLocationSchema
    },
    endLocation: {
        type: GeoLocationSchema
    },
    locationPayload: {
        type: Object
    }
});

const RideRequestModel = new mongoose.model('rideRequestModel', rideRequest);
export default RideRequestModel;