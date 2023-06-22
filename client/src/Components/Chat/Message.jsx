import React, { useContext } from 'react';
import { GlobalContext } from '../../Contexts';
import styles from './Message.module.css';

//eslint-ignore
const Message = ({ senderName, senderId, date, time, tripId, text }) => {
    // eslint-disable-next-line no-unused-vars
    const { user } = useContext(GlobalContext);

    return (
        <div className={user?._id === senderId ? styles.myMessage : styles.notMyMessage}>
            <div className={styles.bubble}>
                <div className={styles.text}>{text}</div>
                <div className={styles.time}>{time}</div>
            </div>
        </div>
    );
}

export default Message;