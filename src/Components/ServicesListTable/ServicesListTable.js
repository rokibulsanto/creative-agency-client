import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';

const ServicesListTable = () => {

    const serviceListStyle = {
        boxShadow:'5px 7px 9px gray',
        border:'1px solid cyan',
        borderRadius:'15px'
    }
    
    
    const [event, setevent] = useState([]);
    const [loogedInUser, setLoggedInUser] = useContext(userContext);
  
    useEffect(() => {
      fetch('https://murmuring-hollows-52320.herokuapp.com/admin')
        .then(res => res.json())
        .then(data => {
            setevent(data);
            console.log(data);
        })

    }, [])


    return (
        <table className="table table-borderless"  style={serviceListStyle}>
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">Email Id</th>
            <th className="text-secondary" scope="col">Service</th>
            <th className="text-secondary" scope="col">Project Details</th>
            <th className="text-secondary" scope="col">Status</th>
            
            </tr>
        </thead>
        <tbody>
            {
              event.map((sevice, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{sevice.name}</td>
                    <td>{sevice.email}</td>
                    <td>{sevice.course}</td>
                    <td>{sevice.message}</td>
                    <td>Done</td>
                </tr>
                )
            }
        </tbody>
    </table>
    );
};

export default ServicesListTable;