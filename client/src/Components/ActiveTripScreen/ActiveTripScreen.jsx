import React, { useCallback, useContext, useEffect } from 'react';
import { GlobalContext } from '../../Contexts';
import checkIfMyTripComplete from '../../Utils/TripComplete';
import { socket } from '../../Socket';
import styles from './Active.module.css'
import Button from '../Common/Button/Button';
import { PostAuth } from '../../Utils/PostAuth';
import Chat from '../Chat/Chat';
import NormalMap from '../MapComponents/NormalMap';
const ActiveTripScreen = ({ setActiveTripScreenVisible }) => {
    const { activeTrip, currentLocation } = useContext(GlobalContext);
    useEffect(() => {
        socket.emit("JOIN_TRIP_ROOM", activeTrip._id);
    }, [activeTrip]);
    const handleTripComplete = useCallback(async () => {
        const response = await PostAuth('/api/ride/endtrip', { activeTrip });
        if (response.success) {
            setActiveTripScreenVisible(false);
        }
    }, [activeTrip, setActiveTripScreenVisible]);
    useEffect(() => {
        if (checkIfMyTripComplete(activeTrip, currentLocation)) {
            handleTripComplete();
        }
    }, [currentLocation, activeTrip, handleTripComplete]);
    return (
        <div className={styles.container}>
            <div className={styles.middle}>
                <div className={styles.actionContainer}>
                    <div className={styles.mapContainer}>
                        <div className={styles.header}>
                            Active Trip
                        </div>
                        <div>
                            <NormalMap />
                        </div>
                    </div>
                    <div className={styles.endTripContainer}>
                        <Button label={"End Trip"} onClick={() => handleTripComplete()} />
                    </div>
                </div>
                <div className={styles.chatContainer}>
                    <Chat />
                </div>
            </div>
        </div>
    );
}

export default ActiveTripScreen;