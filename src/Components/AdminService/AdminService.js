import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import './AdminService.css';

const AdminService = () => {

    const containerStyle = {
        backgroundColor:'#F4FDFB',
        height:'100%'
    };

    const { register, handleSubmit, watch, errors } = useForm();
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [eventdata,seteventdata] = useState([]);
    const [file,setfile]=useState(null);
    const [info,setinfo]=useState();

    const blur=(e)=>{
        const newinfo ={...info};
        newinfo[e.target.name]=e.target.value;
        console.log(newinfo);
            setinfo(newinfo);
        }
        const filechange=(e)=>{
        const newfile=e.target.files[0];
        setfile(newfile);
        }



    const onSubmit = data => {
        console.log(info.name);
            //////send data to server  by POST method ////////
            history.replace(from);

            const formData = new FormData()
            formData.append('file', file);
            formData.append('title', info.title);
            formData.append('text', info.text);

            fetch('https://murmuring-hollows-52320.herokuapp.com/addservice', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })

 
          }




    return (
        <section>
        <div style={containerStyle} className="container-fluid row">
            <div className="col-md-4">
                   <AdminSidebar></AdminSidebar>
            </div>

            <div className="col-md-8 customerOrder">
            <form onSubmit={handleSubmit(onSubmit)}>
                       <div className="form-group">
                           <h6>Service Title</h6>
                           <input onBlur={blur}  type="text" className="form-control customerInput" placeholder="Service Title" name="title" ref={register({ required: true })}/>
                       </div>
                     
                       <div className="form-group">
                           <h6>Description</h6>
                           <textarea onBlur={blur} className="form-control customerInput" id="" cols="5" rows="3" placeholder="Description" name="text" ref={register({ required: true })}></textarea>
                       </div>
                       <div className="form-group">
                           <h6>Icon</h6>
                           <input onChange={filechange}  type="file" className="form-control customerfile" placeholder="Upload a Project file" name="pic" ref={register({ required: true })}/>
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

export default AdminService;