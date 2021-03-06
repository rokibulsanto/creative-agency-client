import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCommentDots, faGripHorizontal, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import sidebarLogo from '../../images/logos/logo.png';

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                   
                    <img className="sidebarLogo" src={sidebarLogo} alt=""/>
                   
                </li>
                <li>
                    <Link to="/customer" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Order</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/servicelist" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Service List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/review" className="text-white">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
                <li>
                    <Link to="/adminlogin" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Admin login</span>
                    </Link>
                </li>
              
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
            
        </div>
    );
};

export default Sidebar;