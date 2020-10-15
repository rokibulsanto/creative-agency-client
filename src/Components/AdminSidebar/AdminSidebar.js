import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './AdminSidebar.css';
import sidebarLogo from '../../images/logos/logo.png';
import { faGripHorizontal, faPlusCircle, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const AdminSidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                <li>
                   
                    <img className="sidebarLogo" src={sidebarLogo} alt=""/>
                   
                </li>
                <li>
                    <Link to="/admin" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Service list</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/adminservice" className="text-white">
                        <FontAwesomeIcon icon={faPlusCircle} /> <span>Add Service</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/adminmake" className="text-white">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                    </Link>
                </li>
              
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
            
        </div>
    );
};

export default AdminSidebar;