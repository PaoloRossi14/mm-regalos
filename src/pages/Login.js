import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRegister, userSignIn } from "features/auth/authSlice";
import styled, { css } from "styled-components";
import logo from "images/logo.png";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    dispatch(userSignIn({ email, password }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(userRegister({ email, password }));
  };

  return (
    <LoginContainer>
      <Link to="/">
        <LoginLogo src={logo} alt="M&M Regalos y Detalles" />
      </Link>
      <LoginCard>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail *</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password *</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginBtn dark type="submit" onClick={handleSignIn}>
            Sign In
          </LoginBtn>
          <LoginBtn onClick={handleRegister}>Create new account</LoginBtn>
        </form>
      </LoginCard>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginLogo = styled.img`
  object-fit: contain;
  width: 200px;
  margin: 0 auto;
`;

const LoginCard = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgrey;
  padding: 20px;

  h1 {
    font-weight: 500px;
    margin-bottom: 20px;
  }

  h5 {
    margin-bottom: 5px;
  }

  input {
    height: 30px;
    margin-bottom: 5px;
    background-color: #fff;
    width: 98%;
    border: 2px solid lightgrey;
  }
`;

const LoginBtn = styled.button`
  background: var(--primary);
  color: var(--primary_dark);
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: none;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    transition: 0.2s ease-in-out;
    background: var(--red);
    color: #fff;
  }

  ${(props) =>
    props.dark &&
    css`
      background: var(--primary_dark);
      color: #fff;
    `}
`;
