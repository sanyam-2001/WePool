import React from 'react';
import styles from './Footer.module.css';
import { BsArrowUp } from 'react-icons/bs'
const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.items}>
                <div className={styles.left}>
                    <div>Home</div>
                    <div>Terms</div>
                    <div>Contact</div>
                    <div>Privacy Policy</div>
                </div>
                <div className={styles.center}>
                    <div><BsArrowUp className={styles.arrow} /></div>
                </div>
                <div className={styles.right}>
                    <div>@2023 Pool</div>
                    <div>Car Pool</div>
                    <div>Designed By Sanyam</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;