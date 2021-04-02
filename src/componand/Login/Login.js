import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


const Login = () => {

    const [user, setUser] = useState({});
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    // firebase.initializeApp(firebaseConfig);
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((res) => {
                const {displayName,email,photoURL}=res.user
                const newUser={
                    userName:displayName,
                    email:email,
                    userPhoto:photoURL
                }
                // var user = res.user;
                // console.log(user);
                // setUser(user)
                setLoggedInUser(newUser)
                history.replace(from)
            })
    }
    
    return (

        <div className='d-flex justify-content-center mt-5'>
            <button className='btn btn-secondary'  onClick={handleGoogleSignIn}>Google Sign In</button>          
        </div>
    );
};

export default Login;