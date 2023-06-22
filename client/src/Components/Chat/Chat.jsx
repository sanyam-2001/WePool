import React, { useContext, useEffect, useState } from 'react';
import styles from './Chat.module.css';
import { GlobalContext } from '../../Contexts';
import { socket } from '../../Socket';
import Message from './Message';
import { AiFillPlayCircle } from 'react-icons/ai'
const Chat = () => {
    const [messageList, setMessageList] = useState([]);
    const { activeTrip, user } = useContext(GlobalContext);
    const [text, setText] = useState("")
    useEffect(() => {
        socket.on("USER_GETS_TEXT", (newMessage) => {
            setMessageList((prev) => [...prev, newMessage]);
        });
        socket.on("USER_ENDED_TRIP", (x) => {
            setMessageList((prev) => [...prev, { type: 'notification', text: `Your match ended their trip` }])
        })
        return () => {
            socket.off("USER_GETS_TEXT");
            socket.off("USER_ENDED_TRIP");
        }
    }, []);

    const sendMessage = () => {
        socket.emit("USER_SENDS_TEXT", {
            activeTrip,
            user,
            text
        });
        setText("");
    }
    const RenderedMessages = messageList.map(({ senderName, senderId, date, time, tripId, text, type }, key) => {
        if (type === "notification") {
            return (
                <div style={{ textAlign: 'center', padding: '20px', fontWeight: 'bold' }}>{text}</div>
            )
        }
        return (
            <Message senderName={senderName} senderId={senderId} date={date} time={time} tripId={tripId} key={key} text={text} />
        )
    })
    return (
        <div className={styles.chatContainer}>
            <div className={styles.heading}>
                <div>Ride Chat</div>
            </div>
            <div className={styles.messageContainer}>
                {RenderedMessages}
            </div>
            <div className={styles.inputBox}>
                <div style={{ flex: 5 }}>
                    <input type="text" placeholder='Type a Message' value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === "Enter" ? sendMessage() : null} />
                </div>
                <div style={{ flex: 2, fontSize: '2em', display: 'flex', alignItems: 'center' }}>
                    <AiFillPlayCircle className={styles.send} />
                </div>
            </div>
        </div>
    );
}

export default Chat;