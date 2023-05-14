import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './Pages/Auth/Auth';
import AuthGuard from './Pages/Auth/AuthGuard';
import { GlobalContext } from './Contexts';
import PageTemplate from './Pages/PageTemplate/PageTemplate';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { getAutocompleteSuggestions } from './Utils/Navigator';
const App = () => {
    const [user, setUser] = useState({
        email: null,
        id: null
    });
    console.log(user)
    return (
        <GlobalContext.Provider value={{ user, setUser }}>
            <Router>
                <Routes>
                    <Route path="/home" exact element={<PageTemplate initialColor="rgb(220,228,219)" children={<Home />} />} />
                    <Route path="/about" exact element={<PageTemplate initialColor="rgb(249,227,215)" children={<About />} />} />
                    <Route path="/auth" exact Component={Auth} />
                    <Route path="/" exact Component={AuthGuard} />
                </Routes>
            </Router>
        </GlobalContext.Provider>
    );
}
export default App;
