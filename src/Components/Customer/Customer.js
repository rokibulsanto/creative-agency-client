import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Customer.css';
import { useForm } from "react-hook-form";

const Customer = () => {

    const containerStyle = {
        backgroundColor:'#F4FDFB',
        height:'100%'
    };

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
            //////send data to server  by POST method ////////
          
            const newbooking = {...data }
            fetch('https://murmuring-hollows-52320.herokuapp.com/addevent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newbooking)
            })
            .then(res => res.json())
            .then(data => {
               alert('your order placed successfully. please Check Your Service List');
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
                           <input type="text" className=" form-control customerInput" placeholder="Your Email Address" name="email" ref={register({ required: true })}/>
                           {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                           <input type="text" className="form-control  customerInput" placeholder="Your name / Company name" name="name" ref={register({ required: true })}/>
                           {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                           <input type="text" className="form-control  customerInput" placeholder="Your Course" name="course" ref={register({ required: true })} />
                           {errors.course && <span className="text-danger">This field is required</span>}
                           </div>
                           <div className="form-group">
                           <textarea name="" className="form-control  customerInput" id="" cols="5" rows="3" placeholder="Your Message" name="message" ref={register({ required: true })}></textarea>
                           {errors.message && <span className="text-danger">This field is required</span>}
                           </div>
                           <div className="form-group">
                           <input type="text" className="form-control  customerInput" placeholder="Price" name="price" ref={register({ required: true })}/>
                           {errors.price && <span className="text-danger">This field is required</span>}
                           </div>
                           <div className="form-group">
                           <input type="file" className="form-control  customerfile" placeholder="Upload a Project file" name="uploadFile" ref={register({ required: true })}/>
                           {errors.uploadFile && <span className="text-danger">This field is required</span>}
                           </div>
                      
                           <div className="form-group">
                           <input type="submit" className=" form-control btnStyleForm"/> 
                           </div>
                   </form>
            </div>

        </div>
    </section>
    );
};

export default Customer;