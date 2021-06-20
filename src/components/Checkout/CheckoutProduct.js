import { useDispatch } from "react-redux";
import { removeItem } from "../../features/carrito/carritoSlice";
import styled from "styled-components";

function CheckoutProduct({ id, image, name, price }) {
  const dispatch = useDispatch();

  return (
    <CheckoutProductContainer>
      <CheckoutProductImage src={image} alt="" />
      <CheckoutProductInfo>
        <p className="checkoutProduct__title">{name}</p>
        <p className="checkoutProduct__price">
          <small>S/ </small>
          <strong>{price}</strong>
        </p>
        <button onClick={() => dispatch(removeItem(id))}>
          Remove from basket
        </button>
      </CheckoutProductInfo>
    </CheckoutProductContainer>
  );
}

export default CheckoutProduct;

const CheckoutProductContainer = styled.div`
  display: flex;
  margin: 20px 0;

  .checkoutProduct__title {
    font-size: 1rem;
    font-weight: 800;
  }
`;

const CheckoutProductImage = styled.img`
  object-fit: contain;
  width: 180px;
  height: 180px;
`;

const CheckoutProductInfo = styled.div`
  padding-left: 20px;

  button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    cursor: pointer;
  }
`;
