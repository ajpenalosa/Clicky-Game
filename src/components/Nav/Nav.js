import React from "react";
import "./Nav.css";

const Nav = props => (
    
    <nav className="navbar fixed-top navbar-dark bg-primary">
        <div className="container">
            <a className="navbar-brand" href="/">Clicky Game</a>

            <span className="nav-message">Click an image to begin!</span>

            <span className="navbar-text">
                <h4>Score: 0 | Top Score: 0</h4>
            </span>

        </div>
    </nav>
);

export default Nav;
