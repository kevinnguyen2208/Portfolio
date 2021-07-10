import React, {Component} from 'react';
import Typewriter from 'typewriter-effect';
import Typist from 'react-typist';
import Button from '../components/Button/Button';
import StarfieldAnimation from 'react-starfield-animation';
import ReactFloaterJs from 'react-floaterjs';
import Helmet from '../resources/img/helmet.png';



class Home extends Component{
    render(){

        return(          
            <div className = "home">
                
                <div class="row">
                    
                    <div className="column1">
                        
                    
                        <div className='home-info'>
                        
                <Typist avgTypingDelay={25}>
                  <span className="tag-open">&lt;header&gt;</span>
                  <h1 className="home-desc">Hello World</h1>
                  <span className="tag-close">&lt;/header&gt;</span>
                    
                    <span className="tag-open">&lt;body&gt;</span>
                        <h2 className="home-desc-comment">&lt;!-- name[0] = Le Bao Duy Nguyen --&gt;</h2>
                        <h2 className="home-desc-comment">&lt;!-- name[1] = Kevin Nguyen --&gt;</h2>                        
                            <span className="tag-in">&lt;job&gt;</span>
                            <h1 className="home-desc"><Typewriter options={{
                strings: ['Full-stack Developer', 'Software Engineer', "Game Developer"],
                autoStart: true,
                loop: true,
                delay:30,
                deleteSpeed:30}}/></h1>
                            <span className="tag-in">&lt;/job&gt;</span>  
                    <span className="tag-close">&lt;/body&gt;</span>

                    <span className="tag-open">&lt;footer&gt;</span>
                        <span className="tag-in">&lt;button&gt;</span>
                        <div className="home-desc">
                            <Button btnColor="black" backColor="#af6ebb" model="outline" onClick={event =>  window.location.href='/about'} >more ...
                            </Button>
                        </div>
                        <span className="tag-in">&lt;/button&gt;</span>
                    <span className="tag-close">&lt;/footer&gt;</span>
                </Typist>
                </div>
                </div>

                    <div className="column2">
                                <div>         
                                    <ReactFloaterJs>
                                    <img className="home-helmet" src={Helmet}  />
                                    </ReactFloaterJs>                
                                </div>
                    </div>
                </div>   
            </div>
        )
    }
}

export default Home;