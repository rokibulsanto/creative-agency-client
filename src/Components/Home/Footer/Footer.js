import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="featured-service pb-0 pb-md-5 my-5 footerSection">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <h2 className="footerTitle">Ler us handle Your <br/>Project Professionally</h2>
                        <p className="text-dark my-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero reprehenderit dolor sapiente. Incidunt amet exercitationem cum soluta iusto. Nostrum facilis doloremque consectetur ipsa debitis asperiores architecto, et pariatur quos!</p>
                    </div>
                    <div className="col-md-7 align-self-center formStyle">
                    <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Email Address"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your name / Company name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                       </div>
                       <div className="form-group">
                           <button type="button" className="btnStyleForm"> Send </button>
                       </div>
                   </form>
                    </div>

                </div>

            </div>
            <p className="allrights">All rights reserved &copy; <span className="santo">Rokibul Santo</span> 2021</p>
        </section>
    );
};

export default Footer;