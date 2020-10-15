import React from 'react';
import logo from '../../images/logos/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#FBD062'}}>
 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <img className="logo" src={logo} alt=""/>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link mr-3" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link mr-3" href="#">Our Protfolio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link mr-3" href="#">Our Team</a>
            </li>
            <li class="nav-item">
                <a class="nav-link mr-3 " href="#">Contract us</a>
            </li>
            <li class="nav-item">
                <button className="login">
                <a class="nav-link mr-3 text-white" href="/login">Login</a>
                </button>
            </li>
            </ul>
        </div>
        </nav>
    );
};

export default Navbar;