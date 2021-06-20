import { Link } from "react-router-dom";
import styled from "styled-components";
import { selectCarrito } from "../features/carrito/carritoSlice";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import LogoLarge from "../images/logo-large.png";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, userSignOut } from "../features/auth/authSlice";

function Header() {
  const user = useSelector(selectUser);
  const carrito = useSelector(selectCarrito);
  const dispatch = useDispatch();

  const handleSignOut = (e) => {
    e.preventDefault();
    dispatch(userSignOut());
  };

  return (
    <HeaderContainer>
      <HeaderLink to="/">
        <HeaderLogo src={LogoLarge} alt="M&M Regalos y Detalles" />
      </HeaderLink>
      <HeaderSearch>
        <HeaderSearchInput type="text" />
        <SearchBtn />
      </HeaderSearch>
      <HeaderNav>
        <HeaderOption to="/products">Boxes</HeaderOption>
        <HeaderOption to="/">Breakfast</HeaderOption>
        <HeaderOption to={!user && "/login"} onClick={handleSignOut}>
          {user ? "Sign out" : "Sign in"}
        </HeaderOption>
      </HeaderNav>
      <HeaderCart to="/checkout">
        <FaShoppingCart />
        <span>{carrito?.length}</span>
      </HeaderCart>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: linear-gradient(90deg, var(--primary), var(--primary_dark));
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const HeaderLink = styled(Link)`
  margin: 0 25px;
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`;

const HeaderLogo = styled.img`
  height: 60px;
  object-fit: contain;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 2rem;
  border-radius: 4px;
  overflow: hidden;
  align-items: center;
  margin: 0 2rem;
  background-color: #fff;

  :focus-within {
    box-shadow: 0 0 0 2px var(--red);
  }
`;

const HeaderSearchInput = styled.input`
  border: 0;
  flex-grow: 1;
  height: 100%;

  :focus {
    outline: none;
  }
`;

const SearchBtn = styled(FaSearch)`
  padding: 5px;
  width: 2rem;
  font-size: 2rem;
  color: #fff;
  background-color: var(--primary);
`;

const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const HeaderOption = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
`;

const HeaderCart = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  text-decoration: none;
  color: #fff;

  span {
    margin-left: 10px;
    margin-right: 18px;
  }
`;
