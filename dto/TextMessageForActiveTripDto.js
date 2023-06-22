import moment from "moment/moment";

const textMessageForActiveTripDto = ({ user, activeTrip, text }) => {
    return {
        text,
        senderId: user._id,
        senderName: user.name,
        tripId: activeTrip._id,
        date: moment().format("D MMM, YYYY"),
        time: moment().format("HH:mm A")
    }
}
export default textMessageForActiveTripDto;