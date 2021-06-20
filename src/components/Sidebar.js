import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { FaTimes } from "react-icons/fa";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/products">Boxes</SidebarLink>
        <SidebarLink to="/">Breakfast</SidebarLink>
        <SidebarLink to="/">Gifts</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Regístrate ahora
          </Button>
        </Link>
      </SideBtnWrap>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: var(--primary);
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-1000px")};

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const CloseIcon = styled(FaTimes)`
  color: #000;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  &:hover {
    color: var(--red);
    transition: 0.2s ease-in-out;
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
