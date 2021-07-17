import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyle from "./globalStyles";
// import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Switch>
        {/* <Route path="/" exact comonent={Home} /> */}
        {/* <Route path='about' component={about} /> */}
        {/* <Route path='contact' component={contact} /> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
