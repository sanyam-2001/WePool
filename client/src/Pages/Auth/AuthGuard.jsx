import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const AuthGuard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("JWTTOKEN")) {
            navigate('/auth');
        }
        else navigate('/home')
    }, [navigate]);
    return (<></>);
}

export default AuthGuard;