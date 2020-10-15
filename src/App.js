import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Customer from './Components/Customer/Customer';
import ServiceList from './Components/ServiceList/ServiceList';
import CustomerReview from './Components/CustomerReview/CustomerReview';
import Admin from './Components/Admin/Admin';
import AdminService from './Components/AdminService/AdminService';
import AdminMake from './Components/AdminMake/AdminMake';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AdminLogin from './Components/Login/AdminLogin';



export const userContext = createContext();


function App() {
  const [loogedInUser, setLoggedInUser] = useState({});
  return (
    <userContext.Provider value={[loogedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
            <Home></Home>
        </Route>
        <Route path="/login">
            <Login></Login>
        </Route>
        <PrivateRoute path="/customer">
            <Customer></Customer>
        </PrivateRoute>
        <Route path="/servicelist">
            <ServiceList></ServiceList>
        </Route>
        <Route path="/review">
            <CustomerReview></CustomerReview>
        </Route>
        <Route path="/admin">
            <Admin></Admin>
        </Route>
        <Route path="/adminservice">
           <AdminService></AdminService>
        </Route>
        <Route path="/adminmake">
           <AdminMake></AdminMake>
        </Route>
        <Route path="/adminlogin">
          <AdminLogin></AdminLogin>
        </Route>
      </Switch>
      
    </Router>
    </userContext.Provider>
  );
}

export default App;
