import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import './CustomerReview.css';

const CustomerReview = () => {
    const containerStyle = {
        backgroundColor:'#F4FDFB',
        height:'100%'
    };

    const [loogedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/app/myservice" } };
    // const {register,handleSubmit } = useForm();
    const [eventdata,seteventdata] = useState([]);


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);

        const newbooking = {...loogedInUser, ...data }
      fetch('https://murmuring-hollows-52320.herokuapp.com/ser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newbooking)
      })
        .then(res => res.json())
        .then(data => {
            alert('Thanks for your Opinion . please check Home page')
        })
    }



    return (
        <section>
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-4">
                    <Sidebar></Sidebar>
            </div>

            <div className="col-md-8 customerOrder">
            <form onSubmit={handleSubmit(onSubmit)}>
                       <div className="form-group">
                           <input type="text" className="form-control customerInput" name="yourName" placeholder="Your name" ref={register({ required: true })}/>
                           {errors.yourName && <span className="text-danger">This field is required</span>}
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control customerInput" name="companyName" placeholder="Your Company name" ref={register({ required: true })}/>
                           {errors.companyName && <span className="text-danger">This field is required</span>}
                       </div>

                       <div className="form-group">
                           <textarea name="" className="form-control customerInput" name="yourMessage" id="" cols="5" rows="3" placeholder="Your Message" ref={register({ required: true })}></textarea>
                           {errors.yourMessage && <span className="text-danger">This field is required</span>}
                       </div>
                      
                       <div className="form-group">
                           <input type="submit" className="btnStyleForm"/> 
                       </div>
                   </form>
            </div>

        </div>
    </section>
    );
};

export default CustomerReview;