import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './Pages/Auth/Auth';
import AuthGuard from './Pages/Auth/AuthGuard';
import { GlobalContext } from './Contexts';
import PageTemplate from './Pages/PageTemplate/PageTemplate';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { updateGlobalCurrentLocation } from './Utils/Navigator';
const App = () => {
    const [user, setUser] = useState({
        email: null,
        id: null
    });
    const [activeTrip, setActiveTrip] = useState(null);
    const [currentLocation, setCurrentLocation] = useState({
        latitude: "0",
        longitude: "0",
        countryCode: "ln"
    });
    useEffect(() => {
        updateGlobalCurrentLocation(setCurrentLocation);
    }, []);
    return (
        <GlobalContext.Provider value={{ user, setUser, currentLocation, setCurrentLocation, activeTrip, setActiveTrip }}>
            <Router>
                <Routes>
                    <Route path="/home" exact element={<PageTemplate children={<Home />} />} />
                    <Route path="/about" exact element={<PageTemplate children={<About />} />} />
                    <Route path="/auth" exact Component={Auth} />
                    <Route path="/" exact Component={AuthGuard} />
                </Routes>
            </Router>
        </GlobalContext.Provider>
    );
}
export default App;
