import React from 'react';
import logo1 from '../../../images/logos/slack.png';
import logo2 from '../../../images/logos/google.png';
import logo3 from '../../../images/logos/netflix.png';
import logo4 from '../../../images/logos/uber.png';
import logo5 from '../../../images/logos/airbnb.png';
import './ConpanyLogo.css';

const CompanyLogo = () => {
    return (
        <div className="row d-flex align-items-center">
            <div className="col-md-2 offset-md-1">
                    <img className="companyLogo" src={logo1} alt=""/>
            </div>
            <div className="col-md-2">
            <img className="companyLogo" src={logo2} alt=""/>
            </div>
            <div className="col-md-2">
            <img className="companyLogo" src={logo3} alt=""/>
            </div>
            <div className="col-md-2">
            <img className="companyLogo" src={logo4} alt=""/>
            </div>
            <div className="col-md-2">
            <img className="companyLogo" src={logo5} alt=""/>
            </div>
            
        </div>
    );
};

export default CompanyLogo;