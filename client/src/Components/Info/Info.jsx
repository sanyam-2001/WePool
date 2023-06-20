import React from 'react';
import styles from './Info.module.css';
import InpageNav from '../InpageNav/InpageNav';
const Info = (props) => {
    return (
        <div className={styles.infoContainer}>
            <div className={styles.heroPanel} style={{ backgroundColor: props.initialColor }}>
                <InpageNav />
                <div className={styles.heroContainer}>
                    <div className={styles.text}>
                        <div className={styles.title}>WE  POOL</div>
                        <div className={styles.subtitle}>Depart with strangers, <br /> Arrive with friends</div>
                    </div>
                    <div className={styles.image}></div>
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

        </div>
    );
}

export default Info;