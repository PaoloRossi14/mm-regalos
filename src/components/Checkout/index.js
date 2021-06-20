import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { selectCarrito } from "../../features/carrito/carritoSlice";
import styled from "styled-components";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const user = useSelector(selectUser);
  const carrito = useSelector(selectCarrito);

  return (
    <CheckoutContainer>
      <CheckoutList>
        <h3>Hello, {user?.email}</h3>
        <h2>Your Shopping Cart</h2>
        {carrito.map((item) => (
          <CheckoutProduct
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
      </CheckoutList>
      <Subtotal />
    </CheckoutContainer>
  );
}

export default Checkout;

const CheckoutContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: var(--lightgrey);
  height: max-content;
  width: 100%;
`;

const CheckoutList = styled.div`
  flex: 0.75;
  padding: 20px;
  margin-right: 20px;
  background-color: #fff;
  h2 {
    padding: 10px 0;
    border-bottom: 1px solid lightgrey;
  }
`;
