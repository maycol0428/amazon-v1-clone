import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, register } from "./https/api";
import { setUser } from "./app/slices/userSlice";

function Login() {
  const history = useHistory();
  const location = useLocation();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const redirect = location.state ? location.state.from : "/";
  const handleSignIn = async (e) => {
    e.preventDefault();
    login({ name, password })
      .then((res) => {
        dispatch(setUser(res.data.user));
        setLoading(false);
        history.push(redirect);
      })
      .catch((err) => {
        alert(err.response.data.message);
        setLoading(false);
      });
  };

  const handleRegister = async (e) => {
    setLoading(true);
    e.preventDefault();
    register({ name, password })
      .then((res) => {
        dispatch(setUser(res.data.user));
        setLoading(false);
        history.push(loading);
      })
      .catch((err) => {
        alert(err.response.message);
        setLoading(false);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>Name</h5>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

          <button type="submit" onClick={handleSignIn} className="login__signInButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our
          Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button disabled={loading} onClick={handleRegister} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
