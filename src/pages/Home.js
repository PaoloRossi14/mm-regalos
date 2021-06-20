import styled from "styled-components";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import { productData } from "../components/Products/data";

function Home() {
  return (
    <HomeContainer>
      <Hero />
      <Products heading="Elige tu Box favorito" data={productData} />
      <Feature />
      <Footer />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = styled.div`
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
`;
