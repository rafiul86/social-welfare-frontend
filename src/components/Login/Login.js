import React, { useContext, useState } from 'react';
import firebaseConfig from '../firebase.config/firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

const Login = () => {
    const [user, setUser] = useState({});
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation(); 
  const { from } = location.state || { from: { pathname: "/" } };
    const provider = new firebase.auth.GoogleAuthProvider();
    const handleLogin = () => {
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
      console.log(result.user)
    const { displayName, email } = result.user;
    const signedInUser = { displayName, email };
    setUser(signedInUser);
    setLoggedInUser(signedInUser);
    history.replace(from);
  }).catch((error) => {
    
  });
    }
    return (
        <div>
                <h1>Hellow {user.displayName}</h1>
            <button onClick={handleLogin}>Google Sign In</button>
        </div>
    );
};

export default Login;