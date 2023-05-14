import React from 'react';
import styles from './Info.module.css';
const Info = () => {
    const image = "https://media.istockphoto.com/id/1225371296/photo/empty-road-through-the-volcanic-field.jpg?b=1&s=612x612&w=0&k=20&c=2wxtONLDcu4DXzrHiQYJbXw318euBEntRjmkctmGMCA=";
    return (
        <>
            <div className={styles.heroContainer}>
                <div className={styles.text}>
                    <div className={styles.title}>WE  POOL</div>
                    <div className={styles.subtitle}>Depart with strangers, <br /> Arrive with friends</div>
                </div>
                <div className={styles.image}>
                    <img src={image} alt="HERO" />
                </div>
            </div>
            <div className={styles.walkthrough}>
                <div className={styles.about}>
                    <div className={styles.textArea}>
                        <div className={styles.main}>
                            We Pool
                        </div>
                        <div className={styles.desc}>
                            is a Car Pooling aggregator application. It brings together people who need commute from nearby areas to similar destinations. Reduce costs of travel and make friends along the way, all before reaching your destination
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Info;