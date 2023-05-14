import React, { useContext } from 'react';
import styles from './InpageNav.module.css';
import { HomeScreenContext } from '../../Contexts';
import { NavItemList } from '../../Contexts';

const InpageNav = () => {
    const { activeHomeScreen, setActiveHomeScreen } = useContext(HomeScreenContext);
    const NavItemComponents = NavItemList.map((element, i) => {
        return (
            <div className={styles.navItem} onClick={() => setActiveHomeScreen(element)} key={i}>
                {activeHomeScreen === element ? <div className={styles.activeAnchor}></div> : null}
                {element}
            </div>
        );
    })
    return (
        <div className={styles.navContainer}>
            <>
                {NavItemComponents}
            </>
        </div>
    );
}

export default InpageNav;