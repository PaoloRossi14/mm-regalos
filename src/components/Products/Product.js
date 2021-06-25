import { useDispatch } from "react-redux";
import { addItem } from "features/carrito/carritoSlice";
import styled from "styled-components";
import { Button } from "@material-ui/core";

function Product({ id, image, alt, name, desc, price }) {
  const dispatch = useDispatch();

  const item = {
    id,
    name,
    image,
    price,
    desc,
  };

  return (
    <ProductCard key={id}>
      <ProductImg src={image} alt={alt} />
      <ProductInfo>
        <ProductTitle>{name}</ProductTitle>
        <ProductDesc>{desc}</ProductDesc>
        <ProductPrice>
          <small>S/ </small>
          {price}
        </ProductPrice>
        <Button
          onClick={() => dispatch(addItem(item))}
          variant="contained"
          color="primary"
        >
          Agregar
        </Button>
      </ProductInfo>
    </ProductCard>
  );
}

export default Product;

const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px var(--primary);
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;
