import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { cartSelector, totalItems, totalPrice } from "./app/slices/cartSlice";
import { useSelector } from "react-redux";

function Subtotal() {
  const history = useHistory();
  const { items } = useSelector(cartSelector);

  return items.length === 0 ? (
    ""
  ) : (
    <>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                {/* Part of the homework */}
                Subtotal ({totalItems(items)} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          )}
          decimalScale={2}
          value={totalPrice(items)} // Part of the homework
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button onClick={(e) => history.push("/payment")}>Proceed to Checkout</button>
      </div>
    </>
  );
}

export default Subtotal;
