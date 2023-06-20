import React, { useCallback, useRef, useState } from 'react';
import styles from './Auth.module.css';
import TextInput from '../../Components/Common/TextInput/TextInput';
import Button from '../../Components/Common/Button/Button';
import AuthGsapTimelines from './GsapTimelines';
import { POST } from '../../Utils/POST';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Auth = () => {
    const [activeState, setActiveState] = useState("LOGIN");
    const loginRef = useRef();
    const signupRef = useRef();
    const workableRef = useRef();
    const closeableRef = useRef();

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [signupName, setSignupName] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');

    const navigate = useNavigate();

    const authGsapTimelines = new AuthGsapTimelines(activeState, setActiveState, signupRef, workableRef, closeableRef);
    const transitionLoginToSignup = () => authGsapTimelines.TransitionLoginToSignup();
    const transitionSignupToLogin = () => authGsapTimelines.TransitionSignupToLogin();

    const attemptLogin = useCallback(async () => {
        const response = await POST('/api/auth/login', { email: loginEmail, password: loginPassword });
        if (!response.success) {
            return toast(response.err || "Something went Wrong");
        }
        localStorage.setItem("JWTTOKEN", response.data);
        navigate("/home");
    }, [loginEmail, loginPassword, navigate]);

    const attemptSignup = useCallback(async () => {
        const response = await POST('/api/auth/signup', { email: signupEmail, password: signupPassword, name: signupName });
        if (!response.success) {
            return toast(response.err || "Something went Wrong");
        }
        localStorage.setItem("JWTTOKEN", response.data);
        navigate("/home");
    }, [signupEmail, signupPassword, signupName, navigate]);

    return (
        <div className={styles.container}>
            <div className={styles.workable} ref={workableRef}>
                <div className={styles.closeable} ref={closeableRef} onClick={transitionSignupToLogin}>X</div>
                <div className={styles.LOGIN_SCREEN} ref={loginRef}>
                    <div className={styles.headingLogin}>ACCOUNT LOGIN</div>
                    <div className={styles.inputBox}>
                        <TextInput label="EMAIL" value={loginEmail} setValue={setLoginEmail} />
                    </div>
                    <div className={styles.inputBox} onKeyDown={(e) => e.key === "Enter" ? attemptLogin() : null}>
                        <TextInput label="PASSWORD" type='password' value={loginPassword} setValue={setLoginPassword} />
                    </div>
                    <div>
                        <Button label="LOG IN" customStyles={{ backgroundColor: "#4285F4", color: "white" }} onClick={attemptLogin} />
                    </div>
                </div>
                <div className={styles.SIGNUP_SCREEN_CONTAINER} ref={signupRef} style={{ cursor: activeState === "LOGIN" ? "pointer" : "default" }} onClick={transitionLoginToSignup}>
                    <div className={styles.SIGNUP_SCREEN}>
                        <div className={styles.headingSignup}>REGISTER ACCOUNT</div>
                        <div className={styles.inputBox}>
                            <TextInput label="NAME" labelStyles={{ color: "white" }} value={signupName} setValue={setSignupName} />
                        </div>
                        <div className={styles.inputBox}>
                            <TextInput label="EMAIL" labelStyles={{ color: "white" }} value={signupEmail} setValue={setSignupEmail} />
                        </div>
                        <div className={styles.inputBox} onKeyDown={(e) => e.key === "Enter" ? attemptSignup() : null}>
                            <TextInput type="password" label="PASSWORD" labelStyles={{ color: "white" }} value={signupPassword} setValue={setSignupPassword} />
                        </div>
                        <div>
                            <Button label="SIGNUP" customStyles={{ backgroundColor: "white", color: "#4285F4" }} onClick={attemptSignup} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;