import React from "react";
import "../style/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../Reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  //gives us the broswer history
  const history = useHistory();
  //where all basket items are stored .. data layer
  const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      {/* on click fire event and push page into payment page */}
      <button onClick={(e) => history.push("./payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
