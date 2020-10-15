import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
  
    const history = useHistory();
    
    const handleGotoCustomerPage = () => {
            history.push('/customer')
    }

    const [event,setevent]=useState([]);

    useEffect(() => {
        fetch('https://murmuring-hollows-52320.herokuapp.com/service')
          .then(res => res.json())
          .then(data =>{
              setevent(data); 
          }) 
      }, [])



    return (
        
    <>
    {
        event.map(e =>
            <div className="col-md-4 pt-5">
            <div className="card shadow-sm text-center" style={{textAlign:'justify'}} onClick={handleGotoCustomerPage}>
            <div className="card-body">
            <img className="mx-3" src={`data:image/png;base64,${e.image.img}`} alt="" width="60"/>
            </div>
            <div className="card-footer d-flex  align-items-center">
                <div>
                    <h5 className="text-warning">{e.title}</h5>
                    <p className="m-0 subjectDes">{e.text}</p>
                </div>
            </div>
          </div>
            </div>
            )
    }
    </>

    );
};

export default ServiceDetails;



