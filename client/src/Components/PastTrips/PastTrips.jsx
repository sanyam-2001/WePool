import React from 'react';
import styles from "./PastTrips.module.css";
const PastTrips = () => {
    return (
        <div>
            <div className={styles.text}>
                Past Trips
            </div>
            <div className={styles.pastContainer}>
                <div className={styles.empty}>
                    No Past Trips
                </div>
            </div>
        </div>
    );
}

export default PastTrips;