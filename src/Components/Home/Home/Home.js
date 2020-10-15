import React from 'react';
import Navbar from '../../Navbar/Navbar';
import ClientFeedback from '../ClientFeedback/ClientFeedback';
import CompanyLogo from '../ConpanyLogo/CompanyLogo';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MyWorks from '../MyWorks/MyWorks';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <CompanyLogo></CompanyLogo>
            <Services></Services>
            <MyWorks></MyWorks>
            <ClientFeedback></ClientFeedback>
            <Footer></Footer>
        
        </div>
    );
};

export default Home;