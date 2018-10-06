//sets up the reusable Navbar component
import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-sticky-top d-flex justify-content-between">
            <div className="p-2">Test Your Memory</div>
            <div className="p-2">Top Score: {this.props.topScore}</div>
            <div className="p-2">Score: {this.props.score}</div>
            </nav>
        );
    }
}

export default Navbar;