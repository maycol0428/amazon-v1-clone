import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(new Date(order.createdAt)).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order._id}</small>
      </p>
      {order.order_items?.map((item, key) => (
        <CheckoutProduct
          key={key}
          id={item._id}
          title={item.title}
          quantity={item.quantity}
          price={item.price}
          image={item.image}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => <h3 className="order__total">Order Total: {value}</h3>}
        decimalScale={2}
        value={order.total_price / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
