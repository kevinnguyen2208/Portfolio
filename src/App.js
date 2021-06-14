import React, {Component} from 'react';

import { IconContext } from 'react-icons';
import { FaLinkedin } from 'react-icons/fa';
import { GoMarkGithub } from "react-icons/go";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Work from './pages/Work';

class App extends Component{
  render() {
    return (      
       <BrowserRouter>
        <IconContext.Provider value={{color : "#4C2672", size :"1em"}}>
          <div className = "navbar">
                <nav>
                <ul>
                    <li><Link to="/">home()</Link></li>
                    <li><Link to="/about">about()</Link></li>
                    <li><Link to="/work">work()</Link></li>
                    <li><Link to="/contact">contact()</Link></li>
                    <li><Link to="//linkedin.com/in/lbduynguyen" target="blank"><FaLinkedin/></Link></li>
                    <li><Link to="//github.com/kevinnguyen2208" target="blank"><GoMarkGithub/></Link></li>
                </ul>
                </nav></div>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/work" component={Work}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
        </IconContext.Provider>
      </BrowserRouter>
    );
  }
}


export default App;
