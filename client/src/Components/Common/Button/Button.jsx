import React from 'react';
import styles from './Button.module.css';

const Button = ({ label, onClick, customStyles = {} }) => {
    return (
        <div className={styles.container} >
            <button style={customStyles} onClick={() => onClick()}>{label}</button>
        </div>
    );
}

export default Button;