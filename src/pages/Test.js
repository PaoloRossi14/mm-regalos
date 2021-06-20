import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { selectUser, userSignIn } from "../features/auth/authSlice";
import {
  addItem,
  removeItem,
  selectCarrito,
  getTotalCarrito,
} from "../features/carrito/carritoSlice";
import { TextField, Button } from "@material-ui/core";

const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 120 },
  { id: 3, name: "Product 3", price: 150 },
];

function Test() {
  const carrito = useSelector(selectCarrito);
  const user = useSelector(selectUser);
  const total = getTotalCarrito(carrito);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    dispatch(userSignIn({ email: email.value, password: password.value }));
  };

  return (
    <TestContainer>
      <div className="auth">
        {user ? (
          <p>You are sign in</p>
        ) : (
          <>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>
              <TextField name="email" label="Email" variant="outlined" />
              <TextField name="password" label="Password" variant="outlined" />
              <Button type="submit" variant="contained" color="primary">
                Ingresar
              </Button>
            </form>
          </>
        )}
      </div>
      <div className="chart">
        <div>
          <h1>Carrito</h1>
          <ul>
            {carrito.map((item, idx) => (
              <li key={idx}>
                {item.name} <p>S/ {item.price}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Total</h1>
          <strong>S/ {total}</strong>
        </div>
      </div>
      <div>
        <h2>Productos</h2>
        <ProductList>
          {products.map((product) => (
            <li key={product.id}>
              <p>{product.name}</p>
              <strong>S/ {product.price}</strong>
              <ButtonStyled
                dark
                // onClick={() => dispatch(addItem({ ...product, quantity: 1 }))}
                onClick={() => dispatch(addItem(product))}
              >
                Agregar
              </ButtonStyled>
              <ButtonStyled onClick={() => dispatch(removeItem(product.id))}>
                Eliminar
              </ButtonStyled>
            </li>
          ))}
        </ProductList>
      </div>
    </TestContainer>
  );
}

export default Test;

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 2rem;

  .chart {
    display: flex;
    gap: 5rem;

    li {
      display: flex;
      gap: 1rem;
    }
  }

  .auth {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    form {
      gap: 1rem;
      display: flex;
    }
  }
`;
const ProductList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
const ButtonStyled = styled.button`
  font-size: 1rem;
  line-height: 1;
  padding: 1rem 4rem;
  border: 2px solid;
  border-radius: 5px;
  cursor: pointer;

  background-color: transparent;
  color: var(--primary);
  border-color: var(--primary);

  ${(props) =>
    props.dark &&
    css`
      color: var(--primary_dark);
      border-color: var(--primary_dark);
    `}

  :hover {
    color: #fff;
    transition: 0.2s ease-in-out;
    background-color: ${(props) =>
      props.dark ? "var(--primary_dark)" : "var(--primary)"};
  }
`;
