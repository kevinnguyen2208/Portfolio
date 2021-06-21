import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { IconContext } from 'react-icons';
import { FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from "react-icons/go";
import { withRouter } from "react-router-dom";


class Header extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    
    const path = this.props.location.pathname.slice(1);
    if(path==""){
      
    }
    return(
    <IconContext.Provider value={{color : "#4C2672", size :"1em"}}>
        
        <div className="logo">{(() => {
        if (path=="") {
          return (
            <div>Kevin.me( )</div>
          )
        } else {
          return (
            <div>Kevin.{path}( )</div>
          )
        } 
      })()}</div>

        <div className = "navbar">
          <ul>
    <nav>
      <li><NavLink id="link" exact activeClassName="active" to="/">home()
      </NavLink></li>
      <li><NavLink id="link" activeClassName="active" to="/about">about()
      </NavLink></li>
      <li><NavLink id="link" activeClassName="active" to="/work">work()
      </NavLink></li>
      <li><NavLink id="link" activeClassName="active" to="/contact">contact()
      </NavLink></li>
      <li><NavLink id="link" activeClassName="active" to="//linkedin.com/in/lbduynguyen" target="blank"><FaLinkedin/>
      </NavLink></li>
      <li><NavLink id="link" activeClassName="active" to="//github.com/kevinnguyen2208" target="blank"><GoMarkGithub/>
      </NavLink></li>
    </nav></ul></div>
    </IconContext.Provider>
    );
  }
}
export default withRouter(Header);