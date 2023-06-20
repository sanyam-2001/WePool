import React, { useContext } from 'react';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import styles from './Navbar.module.css'
import { AppContext } from '../../Contexts';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { isNavOpen: isOpen, setNavOpen: setOpen } = useContext(AppContext);
    const navigate = useNavigate();
    return (
        <div className={styles.navContainer}>
            <div className={styles.iconContainer} onClick={() => setOpen(prev => !prev)}>
                {
                    isOpen ? <RxCross2 size={"2em"} className={styles.hamburger} /> :
                        <RxHamburgerMenu size={"2em"} className={styles.hamburger} />
                }


            </div>
            {
                isOpen ?
                    (<div className={styles.options}>
                        <div onClick={() => navigate("/home")}><>Home</></div>
                        <div onClick={() => navigate("/about")}><>About</></div>
                        <div onClick={() => navigate("/trips")}><>Trips</></div>
                        <div onClick={() => navigate("/settings")}><>Settings</></div>
                        <div onClick={() => navigate("/howto")}><>How To</></div>

                    </div>)
                    : null
            }
        </div>
    );
}

export default Navbar;