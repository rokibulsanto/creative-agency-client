import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css';


const Services = () => {
    return (
        <section className="services my-5 py-5">
            <div className="container">
               <div className="section-header">
                   <h2 className="serviceTitle">Provide awesome <span className="serviceStyle">Services</span> </h2>
               </div>
               <div className="card-deck mt-5 row">
                    
                 <ServiceDetails/>
                    
                </div>
           </div>
        </section>
    );
};

export default Services;