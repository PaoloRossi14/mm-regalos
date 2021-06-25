import styled from "styled-components";
import { Button } from "@material-ui/core";

function Banner(props) {
  return (
    <BannerContainer
      bgColor={props.bgColor}
      lightText={props.lightText}
      imgStart={props.imgStart}
    >
      <Column>
        <Wrapper>
          <Topline lightText={props.lightText}>{props.topline}</Topline>
          <Headline>{props.headline}</Headline>
          <Description>{props.description}</Description>
          <Button
            variant="contained"
            color={props.buttonColor}
            href={props.link}
            target="_blank"
            aria-label={props.linkDesc}
            rel="noopener noreferrer"
          >
            {props.buttonDesc}
          </Button>
        </Wrapper>
      </Column>
      <Column>
        <Wrapper>
          <BannerImg
            src={props.img}
            alt={props.linkDesc}
            color={props.lightText}
          />
        </Wrapper>
      </Column>
    </BannerContainer>
  );
}

export default Banner;

const BannerContainer = styled.section`
  padding: 10rem 0;
  display: flex;
  align-items: center;
  scroll-snap-align: start;
  flex-direction: ${(props) => (props.imgStart ? "row-reverse" : "row")};
  color: ${(props) => (props.lightText ? "#fff" : "#000")};
  background-color: ${(props) =>
    props.bgColor ? `var(--${props.bgColor})` : "transparent"};

  @media screen and (max-width: 680px) {
    flex-direction: column;
    gap: 2rem;
    padding: 2.3rem 0;
  }
`;

const Column = styled.div`
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
`;

const Wrapper = styled.div`
  max-width: 550px;
`;

const Topline = styled.p`
  font-size: 1rem;
  color: ${(props) =>
    props.lightText ? `var(--primary)` : `var(--primary_dark)`};
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  max-width: 440px;
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const BannerImg = styled.img`
  width: 100%;
  max-width: 400px;
  object-fit: contain;
  box-shadow: 0.5rem 0.5rem
    ${(props) => (props.color ? `var(--primary)` : `var(--primary_dark)`)};

  :hover {
    transform: scale(1.05);
    transition: all 0.3s ease-out;
  }
`;
