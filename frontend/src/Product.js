import React from "react";
import { useDispatch } from "react-redux";
import cartSlice, { updateCart } from "./app/slices/cartSlice";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch();
  const addToBasket = (e) => {
    dispatch(updateCart({ id, title, image, price, rating }));
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
