import styled from "styled-components";
import useToggle from "../hooks/useToggle";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Banner from "../components/Banners/Banner";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import { productData } from "../components/Products/data";
import { bannerDiaMadre, bannerDiaPadre } from "../components/Banners/data";

function Home() {
  const [isOpen, toggle] = useToggle(false);

  return (
    <HomeContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <Products heading="Elige tu Box favorito" data={productData} />
      <Banner {...bannerDiaPadre} />
      <Banner {...bannerDiaMadre} />
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
