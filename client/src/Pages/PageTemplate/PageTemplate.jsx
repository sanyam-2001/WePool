import React, { useContext, useEffect, useState } from 'react';
import { AppContext, GlobalContext } from '../../Contexts';
import GetAuth from '../../Utils/GetAuth';
import { useNavigate } from 'react-router-dom';
import styles from './PageTemplate.module.css'
import Static from '../../Components/Static/Static';
const PageTemplate = ({ children, initialColor }) => {
    const globalContext = useContext(GlobalContext);
    const navigate = useNavigate();
    const setGlobalContextUser = globalContext.setUser;

    useEffect(() => {
        if (!localStorage.getItem("JWTTOKEN")) {
            return navigate('/')
        }
        GetAuth('/api/user')
            .then(response => {
                setGlobalContextUser(response.data);
            });
    }, [navigate, setGlobalContextUser]);
    const [isNavOpen, setNavOpen] = useState(false);
    return (
        <AppContext.Provider value={{ isNavOpen, setNavOpen }}>
            <Static />
            {/* Scroll Strip for Parallax Effect */}
            <div style={{ position: 'fixed', width: '100%', height: '5%', backgroundColor: 'white', zIndex: 997 }}></div>
            <div className={styles.appContainer} style={{ backgroundColor: initialColor }}>
                <div className={styles.innerContainer}>
                    {children}
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default PageTemplate;