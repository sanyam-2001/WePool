import React from 'react';
import Navbar from '../Navbar/Navbar';
import Title from '../Common/Title/Title';
import styles from './StaticHome.module.css';
const StaticHome = () => {
    return (
        <div className={styles.staticContainer}>
            <div className={styles.navContainer}>
                <Navbar />
            </div>
            <div className={styles.titleContainer}>
                <Title />
            </div>
        </div>
    );
}

export default StaticHome;