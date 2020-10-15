import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './ServiceList.css';
import picture from '../../images/icons/service4.png';
import { userContext } from '../../App';



const ServiceList = () => {
    const containerStyle = {
        backgroundColor:'#F4FDFB',
        height:'100%'
    };
    
    const [eventItem, seteventItem] = useState([]);
    const [loogedInUser, setLoggedInUser] = useContext(userContext);
  
    useEffect(() => {
      fetch('https://murmuring-hollows-52320.herokuapp.com/event?email=' + loogedInUser.email)
        .then(res => res.json())
        .then(data => {
            seteventItem(data);
            console.log(data);
        })

    }, [])



    return (
        <section>
        
        <div className="mt-3 container-fluid row">
            <div className="col-6 col-sm-6 col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div id='ordermain' className="col-6 col-sm-6 col-md-7 d-flex justify-content-center">


            <div class="body">
        <h3> Your Ordered Services :{eventItem.length}</h3>
      
        {
          eventItem.map(item =>

            <div class="mb-4">
               <div class="card order-card ">
               <div class='d-flex justify-content-start'>
                 <div class="card-body">
              <h5 class="card-title order-title">Name: {item.name} </h5>
             <h6 className="order-body" > Course Name: {item.course}</h6>
             <p></p>
             <h6  className="order-body">  Client Email: {item.email} </h6>
             <p  className="order-body" class="card-text">Description: {item.message}</p>
                   </div>
                   </div>
            
               </div>

               </div>

          )
        }
      </div>


            </div>

        </div>
    </section>
    );
};

export default ServiceList;