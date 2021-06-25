import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "features/auth/authSlice";
import { selectCarrito } from "features/carrito/carritoSlice";
import styled from "styled-components";
import CheckoutProduct from "./Checkout/CheckoutProduct";

function Payment() {
  const user = useSelector(selectUser);
  const carrito = useSelector(selectCarrito);

  return (
    <PaymentContainer>
      <h1>
        Checkout (<Link to="/checkout">{carrito?.length} items</Link>)
      </h1>
      <PaymentSection>
        <PaymentTitle>
          <h3>Delivery addres</h3>
        </PaymentTitle>
        <PaymentAddress>
          <p>{user?.email}</p>
          <p>Olmedo 194</p>
          <p>Pueblo Libre, Lima</p>
        </PaymentAddress>
      </PaymentSection>
      <PaymentSection>
        <PaymentTitle>
          <h3>Revieve items and delivery</h3>
        </PaymentTitle>
        <PaymentItems>
          {carrito.map((item) => (
            <CheckoutProduct
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </PaymentItems>
      </PaymentSection>
      <PaymentSection>
        <PaymentTitle>
          <h3>Payment Method</h3>
        </PaymentTitle>
        <PaymentDetails></PaymentDetails>
      </PaymentSection>
    </PaymentContainer>
  );
}

export default Payment;

const PaymentContainer = styled.div`
  h1 {
    text-align: center;
    padding: 10px;
    font-weight: 400;
    background-color: rgb(234, 237, 237);
    border-bottom: 1px solid lightgrey;
  }
  h1 a {
    text-decoration: none;
  }
`;
const PaymentSection = styled.div`
  display: flex;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid lightgrey;
`;
const PaymentTitle = styled.div`
  flex: 0.2;
`;
const PaymentAddress = styled.div`
  flex: 0.8;
`;
const PaymentItems = styled.div``;
const PaymentDetails = styled.div``;
