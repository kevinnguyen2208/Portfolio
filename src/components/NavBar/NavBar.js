import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import StarfieldAnimation from 'react-starfield-animation';



class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  state = { clicked: false }
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  handleRefresh = () => {
    // by calling this method react re-renders the component
    this.setState({});  };


  render() {

    const path = this.props.location.pathname.slice(1);

    return (

      <nav className="NavbarItems">


        <div className="logo">{(() => {
          if (path === "") {
            return (
              <div>.me()</div>
            )
          } else {
            return (
              <div>.{path}()</div>
            )
          }
        })()}</div>

        <div className="starfield-animation-nav">{(() => {
          if (path === "") {
            return (
              <StarfieldAnimation
                className="starfield-animation-nav"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                }}
              />
            )
          }
          else {
          }
        })()}

        </div>

        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} >
          </i>
        </div>

        <div className={this.state.clicked ? "nav-menu-active" : "nav-menu"}>
          <ul>
            <nav onClick={this.handleClick}>
              <li><NavLink className="link" exact to="/" onClick={event => window.location.href = '/'} >home()
              </NavLink></li>
              <li><NavLink className="link" to="/about" onClick={event => window.location.href = '/about'}  >about()
              </NavLink></li>
              <li><NavLink className="link" to="/work" onClick={event => window.location.href = '/work'}  >work()
              </NavLink></li>
              <li><NavLink className="link" to="/contact" onClick={event => window.location.href = '/contact'}  >contact()
              </NavLink></li>
            </nav></ul></div>
      </nav>
    );
  }
}
export default withRouter(NavBar);