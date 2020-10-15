import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AdminMake.css';

const AdminMake = () => {

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

            <div className="col-md-8 customerOrder">
            <form action="">
                       <div className="form-group">
                           <h6>Email</h6>
                           <input type="text" className="form-control customerInput" placeholder="Email Address"/>
                       </div>
                
                       <div className="form-group">
                           <button type="button" className="btn btn-primary"> Submit </button>
                       </div>
                   </form>
            </div>

        </div>
    </section>
    );
};

export default AdminMake;