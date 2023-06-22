import React, { useContext, useEffect } from 'react';
import styles from './ConfirmationScreen.module.css';
import { socket } from '../../Socket';
import { PostAuth } from '../../Utils/PostAuth';
import { GlobalContext } from '../../Contexts';
import Map from '../MapComponents/Map';
import Button from '../Common/Button/Button';

const ConfirmationScreen = ({ startPoint, endPoint, setActiveTripScreenVisible, setConfirmationScreenVisible, setWaitScreenVisible }) => {
    const { setActiveTrip } = useContext(GlobalContext);
    useEffect(() => {
        socket.on("TRIP_FOUND", (trip) => {
            setConfirmationScreenVisible(false);
            setActiveTripScreenVisible(true);
            setWaitScreenVisible(false);
            setActiveTrip(trip);
        });
        socket.on("TRIP_NOT_FOUND", () => {
            setWaitScreenVisible(true);
        })

        return () => {
            socket.off("TRIP_FOUND");
            socket.off("TRIP_NOT_FOUND");
        }
    });

    const findRidesOrListen = async (startPoint, endPoint) => {
        await PostAuth('/api/ride', {
            startPoint,
            endPoint
        });
    }
    // console.log(document.getElementsByClassName('leaflet-routing-alt')[0].children[0].innerText)
    return (
        <div className={styles.mainContainer}>
            <div className={styles.workable}>

                <div className={styles.mapcontainer}>
                    {startPoint?.[1] && endPoint?.[1] ?
                        <Map startLat={startPoint[1].lat} startLon={startPoint[1].lon} endLat={endPoint[1].lat} endLon={endPoint[1].lon} />
                        : null}
                </div>
                <div className={styles.decisionContainer}>
                    <Button customStyles={{ backgroundColor: "#4285f4" }} onClick={() => findRidesOrListen(startPoint[1], endPoint[1])} label={"Confirm"} />
                    <Button customStyles={{ backgroundColor: "#f44263" }} onClick={() => setConfirmationScreenVisible(false)} label={"Close"} />
                </div>
            </div>
        </div>
    );
}

export default ConfirmationScreen;