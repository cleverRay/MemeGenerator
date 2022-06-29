import logo from "./Troll-Face.png";
import React from "react";
import "./styles.css";

export default function Header() {
    return(

        <header>
                <nav className = "nav">
                <div className="memelogo">
                <img src={logo} className ="nav-logo"/>
                <h2>MemeGenerator</h2>
                </div>
                <ul className= "nav-item">
                    <li>Designed with React</li>
                </ul>
                </nav>
            </header>

    )
}