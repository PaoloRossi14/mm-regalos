import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getTotalCarrito, selectCarrito } from "features/carrito/carritoSlice";

function Subtotal() {
  const history = useHistory();
  const carrito = useSelector(selectCarrito);
  const total = getTotalCarrito(carrito);

  return (
    <SubtotalContainer>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({carrito?.length} items):
              <strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={total}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"S/."}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </SubtotalContainer>
  );
}

export default Subtotal;

const SubtotalContainer = styled.div`
  display: flex;
  flex: 0.25;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 200px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 3px;

  small {
    display: flex;
    align-items: center;
  }

  small > input {
    margin-right: 5px;
  }

  button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
`;
