import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../../images/logos/Frame.png';
import './Header.css';

const Header = () => {
    return (
        <main className="row d-flex align-items-center headerContainer">
        <div className="col-md-4 offset-md-1">
            <h1 className="brandTitle">Let's Grow Your <br/>Brand To The <br/> Next Level</h1>
            <p style={{color:'black'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatum veniam rem animi similique doloremque.Excepturi voluptatum veniam rem animi similique doloremque.</p>
           <Link to="/login"><button className="hireBtn">Hire us</button> </Link>

        </div>
        <div className="col-md-6">
            <img src={pic} alt="" className="img-fluid picture"/>
        </div>
        
    </main>
    );
};

export default Header;