import React, { useEffect, useState } from 'react';
import './ClientDetails.css';

const ClientFeedBackDetails = () => {
    
    const [event,setevent]=useState([]);
    
    useEffect(() => {
        fetch('https://murmuring-hollows-52320.herokuapp.com/ser')
          .then(res => res.json())
          .then(data =>{
            console.log(data);
        setevent(data);
       
           
          }) 
      }, [])


    return (
        <>
       
        { event.map(e =>
        <div className="col-md-4 pt-4">
        <div className="card shadow-sm ">
        <div className="card-body cardImg">
          <img className="mx-3 " src={e.photo} alt="" width="60"/>
          
        </div>
        <div className="card-footer">
          <div> 
            <p className="card-text text-center cardName">{e.name}</p>
          </div>

            <div>
                <p className="m-0 cardMsg">{e.yourMessage}</p>
            </div>
        </div>
       </div>
          </div>
          
          )
        }
      </>

        
    );
};

export default ClientFeedBackDetails;