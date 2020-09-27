import React from "react";
import ReactDOM from 'react-dom'
import NavBar from "../components/Navbar"
import HomeLayoutPage from './homeLayoutPage'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
    <Router>
        <NavBar />
        <div className="container">
            <HomeLayoutPage />
        </div>
    </Router>,
    document.querySelector('div.react-component')
);
