import React, { useContext, useEffect } from 'react';
import styles from './ConfirmationScreen.module.css';
import { socket } from '../../Socket';
import { PostAuth } from '../../Utils/PostAuth';
import { GlobalContext } from '../../Contexts';

const ConfirmationScreen = ({ startPoint, endPoint, setActiveTripScreenVisible, setConfirmationScreenVisible }) => {
    const { setActiveTrip } = useContext(GlobalContext);
    useEffect(() => {
        socket.on("TRIP_FOUND", (trip) => {
            setConfirmationScreenVisible(false);
            setActiveTripScreenVisible(true);
            setActiveTrip(trip);
        });

        return () => {
            socket.off("TRIP_FOUND");
        }
    });

    const findRidesOrListen = async (startPoint, endPoint) => {
        await PostAuth('/api/ride', {
            startPoint,
            endPoint
        });
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.workable}>
                <div><button onClick={() => findRidesOrListen(startPoint[1], endPoint[1])}>Confirm</button></div>
            </div>
        </div>
    );
}

export default ConfirmationScreen;