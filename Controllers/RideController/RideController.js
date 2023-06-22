import ActiveTripController from "./ActiveTripController";
import EndTripController from "./EndTripController";
import GetRideController from "./GetRideController";
import PastTripController from "./PastTripController";

const RideController = {
    GET_RIDE_CONTROLLER: GetRideController,
    END_TRIP_CONTROLLER: EndTripController,
    ACTIVE_TRIP_CONTROLLER: ActiveTripController,
    PAST_TRIP_CONTROLLER: PastTripController
}

export default RideController;