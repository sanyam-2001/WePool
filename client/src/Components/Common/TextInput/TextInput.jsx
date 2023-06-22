import React from 'react';
import styles from './TextInput.module.css'
const TextInput = ({ label, type = "text", value, setValue, labelStyles, placeholder }) => {
    return (
        <div className={styles.inputGroup}>
            <div className={styles.label} style={labelStyles}>{label}</div>
            <div className={styles.input}>
                <input type={type} value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} />
            </div>
        </div>
    );
}

export default TextInput;