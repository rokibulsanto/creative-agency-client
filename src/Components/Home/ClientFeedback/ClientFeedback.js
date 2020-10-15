import React from 'react';
import ClientFeedBackDetails from '../ClientFeedbackDetails/ClientFeedBackDetails';
import './ClientFeedback.css';


const ClientFeedback = () => {
    return (
        <section className="feedback my-5 py-5">
            <div className="container">
               <div className="feedback-header">
                   <h2 className="feedbackTitle">Clients <span className="feedbackStyle">Feedback</span> </h2>
               </div>
               <div className="card-deck mt-5 row">
                    
                     <ClientFeedBackDetails/>
                    
                </div>
           </div>
        </section>
    );
};

export default ClientFeedback;