import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@geoapify/geocoder-autocomplete/styles/minimal.css'
import '@geoapify/route-directions/styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <App />
        <ToastContainer />
    </>
);
