import React, { useState } from "react";
import "../style/Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import firebase from "firebase";

function Login() {
  const history = useHistory(); //used to redirect after register/login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault(); //this prevents the page from refreshing after clicking sign in

  auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault(); //this prevents the page from refreshing after click register

 auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //it suceeded creating a new user with email & password
        console.log(auth);
        //if auth comes back redirect to homepage
        if (auth) {
          history.push("/");
        }
      }) // if it doesnt work till alert a error message
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="text"
            value={email} //then this value from onchange gets mapped like a circle into this value
            onChange={(e) => setEmail(e.target.value)} //this on change fires when user types in an email
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password} //this value from onchange gets mapped like a circle into this value
            onChange={(e) => setPassword(e.target.value)} // on change fires when user types in a password
          />
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
