import "./index.css";
import React from "react";
import Home from "./pages/Home";
import Work from "./pages/Work";
import ReactDOM from "react-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./components/NavBar/NavBar.css";
import "./components/Button/button.module.css";
import reportWebVitals from "./reportWebVitals";
import "./components/ContactForm/ContactForm.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";


ReactDOM.render(
  <Router>
    <div>
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home}  />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work}/>
        <Route path="/contact" component={Contact}  />
      </Switch>
      {/* <Footer/> */}
    </div>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();