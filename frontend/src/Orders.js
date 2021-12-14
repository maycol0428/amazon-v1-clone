import React, { useState, useEffect } from "react";
import "./Orders.css";
import Order from "./Order";
import { getUserOrders } from "./https/api";
import { useSelector } from "react-redux";
import { userSelector } from "./app/slices/userSlice";

function Orders() {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector(userSelector);
  useEffect(() => {
    if (user) {
      getUserOrders(user._id).then((res) => {
        console.log(res);
        setOrders(res.data.orders);
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
