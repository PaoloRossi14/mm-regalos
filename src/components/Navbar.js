import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillGift } from "react-icons/ai";
import logo from "images/logo.png";

function Navbar({ toggle }) {
  return (
    <Nav>
      <NavLink to="/">
        <NavLogo src={logo} alt="M&M Regalos y Detalles" />
        Regalos y Detalles
      </NavLink>
      <NavIcon onClick={toggle}>
        <Bars />
      </NavIcon>
    </Nav>
  );
}

export default Navbar;

const Nav = styled.nav`
  height: 80px;
  display: flex;
  background: transparent;
  /* background: var(--primary); */
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  color: var(--primary_dark);
  font-size: 2rem;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-weight: 400;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
    padding: 0 2rem;
  }
`;

const NavLogo = styled.img`
  object-fit: contain;
  height: 60px;
  margin: 20px;
  @media screen and (max-width: 480px) {
    margin: 0;
    padding-right: 10px;
  }
`;

const NavIcon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 40px;
  cursor: pointer;
  color: var(--primary_dark);

  @media screen and (max-width: 480px) {
    padding-right: 10px;
    font-size: 1rem;
  }
`;

const Bars = styled(AiFillGift)`
  font-size: 2.2rem;

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;
