import React from "react";
import { Link } from "react-router-dom"

const NavBar = (): JSX.Element => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/index">
            <img src="/images/logo2.png" height="40" width="40" alt="Image not available" />
            &nbsp;&nbsp;All About Moviezzz
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">    
                <Link className="nav-item nav-link" to="/search">Search</Link>               
            </div>
        </div>
        </nav>
    )}

export default NavBar
