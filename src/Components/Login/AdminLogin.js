import React, { useState } from 'react';
import firebaseConfig from './firebase.config';
import './Login.css';
import logo from '../../images/logos/logo.png';
import googleLogo1 from '../../images/logos/google11.png';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';



const AdminLogin = () => {

    const [loogedInUser, setLoogedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
    const [user, setUser] = useState({
        isSignedIn:false,
        name:'',
        email:'',
        photo:''
    })


    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const {displayName, email, photoURL} = res.user;
            const signInUser = {
                isSignedIn: true,
                email:email,
                name:displayName,
                photo:photoURL
            }
            setUser(signInUser);
            setLoogedInUser(signInUser);
            storeAuthToken();
            history.replace('/admin');
           

        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
    }
   
    const storeAuthToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function(idToken) {
           sessionStorage.setItem('token', idToken);
        
          })
          .catch(function(error) {
            
          });
    }
    return (
        <div>
        <div className="lOGOArea"> <img className="lOGINLogo" src={logo} alt=""/> </div>
        <div className="LOGIN">
            <h4>Log in With</h4>
            <img className="google" src={googleLogo1} alt=""/>
            <button onClick={handleGoogleSignIn} className="btn btn-warning">Continue With Google</button><br/>
            <small>Don't have an account? </small>
            <small>Create an account </small>
                { user.isSignedIn && <p>Hello, {user.name}</p>}
        </div>
    </div>
    );
};

export default AdminLogin;