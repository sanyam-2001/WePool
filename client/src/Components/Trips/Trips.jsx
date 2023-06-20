import React from 'react';
import styles from './Trips.module.css';
import InpageNav from '../InpageNav/InpageNav';
import PastTrips from '../PastTrips/PastTrips';
import NewTrip from '../NewTrip/NewTrip';

const Trips = (props) => {
    return (
        <div className={styles.tripsContainer}>
            <div className={styles.infoPanel} style={{ backgroundColor: props.initialColor }}>
                <InpageNav />
                <div className={styles.workable}>
                    <div className={styles.pastTripContainer}>
                        <PastTrips />
                    </div>
                    <div className={styles.newTripContainer}>
                        <NewTrip />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trips;