import React from 'react';
import { useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import ServicesListTable from '../ServicesListTable/ServicesListTable';

const Admin = () => {
    const containerStyle = {
        backgroundColor:'#F4FDFB',
        height:'100%'
    };
    

    return (
        <section>
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-4">
                    <AdminSidebar></AdminSidebar>
            </div>

            <div className="col-md-8 p-4 pr-5 customerOrder" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5>Services List</h5>
                <ServicesListTable ></ServicesListTable>
           
            </div>

        </div>
    </section>
    );
};

export default Admin;