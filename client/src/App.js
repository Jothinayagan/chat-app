import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./components/ChatNew/Dashboard/Dashboard";
import NavBar from "./components/ChatNew/NavBar/NavBar";
import Welcome from "./components/ChatNew/welcome/Welcome";

// import Chat from "./components/Chat/Chat";
// import Join from "./components/Join/Join";

const App = () => {
    return (
        <>
            <NavBar />
            <Router>
                <Route path="/" exact component={Welcome} />
                <Route path="/loginSuccess" component={Dashboard} />
                {/* <Route path="/" exact component={Join} /> */}
                {/* <Route path="/chat" component={Chat} /> */}
            </Router>
        </>
    );
};

export default App;
