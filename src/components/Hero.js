import { useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ImgBg from "../images/modelo-2.jpg";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <h1>
            Contigo <small>en</small> momentos especiales
          </h1>
          <p>Listo en 3 horas</p>
          <CustomButton variant="contained" color="primary" size="large">
            Haz tu pedido
          </CustomButton>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

export default Hero;

const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
  scroll-snap-align: start;
`;

const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }

  h1 {
    font-size: clamp(2.5rem, 10vw, 5rem);
    margin-bottom: 1rem;
    box-shadow: 3px 5px var(--primary);
    letter-spacing: 3px;

    small {
      font-size: 3.5rem;
    }
  }

  p {
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;
  }
`;

const CustomButton = styled(Button)`
  margin-left: 1rem !important;

  :hover {
    color: var(--primary_dark);
    background-color: var(--primary) !important;
  }
`;
