import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalTheme from "./styles/GlobalTheme";
import "./styles/App.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Test from "./pages/Test";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import ProductsDB from "./components/Products/ProductsDB";

function App() {
  return (
    <Router>
      <GlobalTheme>
        <Switch>
          <Route path="/login" component={Login} />

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Payment />
          </Route>

          <Route path="/products">
            <Header />
            <SinglePageContainer>
              <ProductsDB />
            </SinglePageContainer>
          </Route>

          <Route path="/test" component={Test} />
          <Route exact path="/" component={Home} />
        </Switch>
      </GlobalTheme>
    </Router>
  );
}

export default App;

const SinglePageContainer = styled.div`
  height: calc(100vh - 152px);

  @media screen and (max-width: 820px) {
    height: calc(100vh - 182px);
  }
`;
