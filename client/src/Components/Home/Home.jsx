import React, { useState } from 'react';
import styles from './Home.module.css'
import InpageNav from '../InpageNav/InpageNav';
import { HomeScreenContext, NavItemList } from '../../Contexts';
import Info from '../Info/Info';
const Home = () => {
    const [activeHomeScreen, setActiveHomeScreen] = useState(NavItemList[0]);
    return (
        <HomeScreenContext.Provider value={{ activeHomeScreen, setActiveHomeScreen }}>
            <InpageNav />
            <div className={styles.homeContainer}>
                {activeHomeScreen === "Info" ? <Info /> : null}
            </div>
        </HomeScreenContext.Provider>
    );
}

export default Home;