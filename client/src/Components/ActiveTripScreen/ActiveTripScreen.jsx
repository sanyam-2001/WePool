import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../Contexts';
import checkIfMyTripComplete from '../../Utils/TripComplete';
import { socket } from '../../Socket';
const ActiveTripScreen = () => {
    const { activeTrip, currentLocation } = useContext(GlobalContext);
    useEffect(() => {
        socket.emit("JOIN_TRIP_ROOM", activeTrip._id);
    }, [activeTrip]);
    useEffect(() => {
        if (checkIfMyTripComplete(activeTrip, currentLocation)) {
            //Mark as My complete i.e 10 or 01
            //Close all tabs and reset global vars related to trip
            //Give Chance to add rider as friend 
        }
    }, [currentLocation, activeTrip]);
    return (<>Trip Is Active</>);
}

export default ActiveTripScreen;