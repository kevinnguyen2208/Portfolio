import React, {Component} from 'react';import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Header from './components/NavBar/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Work from './pages/Work';



class App extends Component{
  render() {
    return (      
       <BrowserRouter>
  <div>

  <Header/>
  
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/work" component={Work}/>
             <Route path="/contact" component={Contact}/>
           </Switch>
        </div> 
      
      </BrowserRouter>
    );
  }
}


export default App;
