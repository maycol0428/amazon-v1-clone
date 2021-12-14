import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { removeUser } from "./app/slices/userSlice";

const Logout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(removeUser());
  }, [dispatch]);
  return (
    <Redirect
      to={{
        pathname: "/",
      }}
    ></Redirect>
  );
};

export default Logout;
