import React, { useState } from 'react';
import styles from './NewTrip.module.css';
import Autocomplete from '../Common/Autocomplete/Autocomplete';
import Button from '../Common/Button/Button';
import { toast } from 'react-toastify';
import ConfirmationScreen from '../ConfirmationScreen/ConfirmationScreen';
import ActiveTripScreen from '../ActiveTripScreen/ActiveTripScreen';

const NewTrip = () => {
    const [currentLocation, setCurrentLocation] = useState(["", null]);
    const [destination, setDestination] = useState(["", null]);
    const [confirmationScreenVisible, setConfirmationScreenVisible] = useState(false);
    const [activeTripScreenVisible, setActiveTripScreenVisible] = useState(false);

    const handleCurrentLocationChange = (e) => {
        setCurrentLocation([e?.properties?.name, e?.properties])
    }

    const handleDestinationChange = (e) => {
        setDestination([e?.properties?.name, e?.properties])
    }

    const findTrips = () => {
        if (currentLocation[1] && destination[1]) {
            setConfirmationScreenVisible(true);
        }
        else toast("Inputs cannot be empty!")
    }

    return (
        <div>
            {confirmationScreenVisible ? <ConfirmationScreen startPoint={currentLocation} endPoint={destination} setActiveTripScreenVisible={setActiveTripScreenVisible} setConfirmationScreenVisible={setConfirmationScreenVisible} /> : null}
            {activeTripScreenVisible ? <ActiveTripScreen /> : null}
            <div className={styles.title}>
                Find New Trip
            </div>
            <div className={styles.inputContainer}>
                <div>
                    <Autocomplete value={currentLocation[0]} setValue={(e) => handleCurrentLocationChange(e)} placeholder="Pick Up Point" />
                </div>
                <div>
                    <Autocomplete value={destination[0]} setValue={(e) => handleDestinationChange(e)} placeholder="Destination" />
                </div>
                <div className={styles.buttonContainer}>
                    <Button label={"Find Trips"} onClick={() => findTrips()} customStyles={{ backgroundColor: "rgb(249,227,215)", border: "1px solid black", fontWeight: '800', letterSpacing: '2px' }} />
                </div>
            </div>
        </div>
    );
}

export default NewTrip;