import React, { useEffect, useState } from 'react';
import styles from "./PastTrips.module.css";
import GetAuth from '../../Utils/GetAuth';

const PastTrips = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        GetAuth('/api/ride/pastTrips')
            .then(response => {
                setCount(response?.data?.length || 0)
            })
    }, []);
    return (
        <div>
            <div className={styles.text}>
                Past Trips
            </div>
            <div className={styles.pastContainer}>
                <div className={styles.empty}>
                    {count} Past Trips
                </div>
            </div>
        </div>
    );
}

export default PastTrips;