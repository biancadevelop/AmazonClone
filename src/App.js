import React, { useEffect } from "react";
import "./style/App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Checkout from "./components/Checkout.js";
import Login from "./components/Login.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment";
//import stripe info
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//use API key from stripe like this
const promise = loadStripe(
  "pk_test_51IN73HBcuyDKEHE98yXxIdF8PiyriuJ7UUI9fc1eISHAhLppuF2uvRtn1EWCMY1ZNTOh1eX0NcHMJ9jwCy4iOAEo00lcm9uLHx"
);

function App() {
  const [ dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when app component loads

    auth.onAuthStateChanged((authUser) => {
      //this is a listener if we log out, register.. it will fire this effect

      if (authUser) {
        //the user just logged in / was already logged in
        dispatch({
          //this is from reducer/data layer/ this info gets shot into the datalayer
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    //BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            {/* wrap payment in an element component for stripe, pass in promise */}
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
