import React from "react";
import { useDispatch } from "react-redux";
import { removeitemCart } from "./app/slices/cartSlice";
import "./CheckoutProduct.css";

function CheckoutProduct({ quantity, id, image, title, price, rating, hideButton }) {
  const dispatch = useDispatch();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch(removeitemCart(id));
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
        <p className="checkoutProduct__title">Cantidad {quantity}</p>
        {!hideButton && <button onClick={removeFromBasket}>Remove from Basket</button>}
      </div>
    </div>
  );
}

export default CheckoutProduct;
