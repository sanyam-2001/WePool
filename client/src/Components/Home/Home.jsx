import React, { useState } from 'react';
import styles from './Home.module.css'
import { HomeScreenContext, NavItemList } from '../../Contexts';
import Info from '../Info/Info';
import Trips from '../Trips/Trips';
const Home = () => {
    const [activeHomeScreen, setActiveHomeScreen] = useState(NavItemList[0]);
    return (
        <HomeScreenContext.Provider value={{ activeHomeScreen, setActiveHomeScreen }}>
            <div className={styles.homeContainer}>
                {activeHomeScreen === "Info" ? <Info initialColor="rgb(220,228,219)" /> : null}
                {activeHomeScreen === "Trips" ? <Trips initialColor="rgb(249,227,215)" /> : null}
            </div>
        </HomeScreenContext.Provider>
    );
}

export default Home;