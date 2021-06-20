import styled from "styled-components";
import { Button } from "@material-ui/core";
import FeaturePic from "../images/modelo-2.jpg";

function Feature() {
  return (
    <FeatureContainer>
      <h1>Diseña tu Box</h1>
      <p>
        Puedes personalizar tu box con los dulces favoritos de la persona
        especial
      </p>
      <Button variant="contained" color="primary">
        Ordena ahora
      </Button>
    </FeatureContainer>
  );
}

export default Feature;

const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
  height: calc(100vh - 99px);
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
  scroll-snap-align: start;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;
