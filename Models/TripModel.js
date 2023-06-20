import mongoose from "mongoose";
import GeoLocationSchema from "./GeoLocationModel";
const trip = mongoose.Schema({
    participants: [String],
    startLocations: [GeoLocationSchema],
    endLocations: [GeoLocationSchema],
    status: String
});

const tripModel = new mongoose.model('tripmodel', trip);
export default tripModel;