import styled from "styled-components";
import Product from "./Product";

function Products({ heading, data }) {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>
        {data.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              image={product.img}
              alt={product.alt}
              name={product.name}
              desc={product.desc}
              price={product.price}
            />
          );
        })}
      </ProductsWrapper>
    </ProductsContainer>
  );
}

export default Products;

const ProductsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem calc((100vw - 1300px) / 2);
  background: #150f0f;
  color: #fff;
  gap: 4rem;
  scroll-snap-align: start;
`;

const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
`;

const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;
