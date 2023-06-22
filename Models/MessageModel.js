import mongoose from "mongoose";
const message = mongoose.Schema({
    text: String,
    tripId: String,
    date: String,
    time: String,
    senderId: String,
    senderName: String

});

const tripModel = new mongoose.model('tripmodel', trip);
export default tripModel;