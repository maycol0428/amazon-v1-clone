import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Login from "./Login";
import Checkout from "./Checkout";
import Payment from "./Payment";
import { useSelector } from "react-redux";
import { userSelector } from "./app/slices/userSlice";
import Logout from "./Logout";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51IDtvxElpR6FkX7g9leNLClZKr6H1vgckij01oPrffR1iiv1evjZasaFMf2k8PWZz9RNu6QuIsn7zccQqO1MDqeM00K9MhWUes"
);

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/logout">
            <Logout></Logout>
          </Route>
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <ProtectedRoute exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </ProtectedRoute>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
const ProtectedRoute = ({ children, ...rest }) => {
  const { auth } = useSelector(userSelector);
  const location = useLocation();
  const redirectURL = location.pathname;
  if (!auth) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: redirectURL },
        }}
      ></Redirect>
    );
  }
  return <Route {...rest}>{children}</Route>;
};
export default App;
