import React from 'react';
import styles from './WaitScreen.module.css';
import Loader from '../Loader/Loader';
const WaitScreen = () => {
    return (
        <div className={styles.waitContainer}>
            <div className={styles.middle}>
                <div style={{ color: 'white' }}>Looking for Trips</div>
                <Loader />
            </div>
        </div>
    );
}

export default WaitScreen;