import React, {Component} from 'react';
import Typewriter from 'typewriter-effect';


class Home extends Component{
    render(){
        return(
          
            <div className = "home">
              <div>Hello World</div>
              <div>name = Le Bao Duy Nguyen</div>
              <Typewriter options={{
                strings: ['Full-stack Developer', 'Software Engineer', "Game Developer"],
                autoStart: true,
                loop: true,
  }}
/>
            </div>
            
      
        )
    }
}

export default Home;