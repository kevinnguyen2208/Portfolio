import React, {Component} from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Data from '../data.json'
import Typewriter from 'typewriter-effect';

class About extends Component{
    render(){
        return(
            <div className = "about" >
                <div className="myself">
                <div>I am a creative full-stack developer and game developer. Coding is my passion, along with 
                <Typewriter options={{
                strings: ['playing sport', 'travelling', "reading"],
                autoStart: true,
                loop: true,}}/> or simply... a cup of coffee.</div>  
                <div>Born in Vietnam, living and working in Melbourne, Australia.</div>
                </div>
                
                <div className="exp-year">// 2+ years of experience</div>
                <br/><hr/><br/>
                <h1 className="skills-header">My [Skills]</h1>

                <div>
                <ul className="skill-tabs">
                <li><Flippy flipOnHover={false}  flipOnClick={true} flipDirection="horizontal"  ref={(r) => this.flippy = r}   style={{ width: '200px', height: '200px' }}>
                    <FrontSide id="skills-front">    
                    <h1>Expertise</h1>
                    </FrontSide>
                    <BackSide id="skills-back">
                   {Data.map(skill =>{
                       return(
                           <h3>{skill.skills1}</h3>
                       )
                   })}
                    </BackSide>
                </Flippy></li>
                <li><Flippy flipOnHover={false}  flipOnClick={true} flipDirection="horizontal"  ref={(r) => this.flippy = r}   style={{ width: '200px', height: '200px' }}>
                    <FrontSide id="skills-front">    
                    <h1>Tech Stack</h1>
                    </FrontSide>
                    <BackSide id="skills-back">
                    {Data.map(skill =>{
                       return(
                           <h3>{skill.skills2}</h3>
                       )
                   })}
                    </BackSide>
                </Flippy></li>
                <li><Flippy flipOnHover={false}  flipOnClick={true} flipDirection="horizontal"  ref={(r) => this.flippy = r}   style={{ width: '200px', height: '200px' }}>
                    <FrontSide id="skills-front">                  
                    <h1>Database</h1>
                    </FrontSide>
                    <BackSide id="skills-back">
                    {Data.map(skill =>{
                       return(
                           <h3>{skill.skills3}</h3>
                       )
                   })}
                    </BackSide>
                </Flippy></li>
                <li><Flippy flipOnHover={false}  flipOnClick={true} flipDirection="horizontal"  ref={(r) => this.flippy = r}   style={{ width: '200px', height: '200px' }}>
                    <FrontSide id="skills-front">    
                    <h1>Adobe Creative Suite</h1>
                    </FrontSide>
                    <BackSide id="skills-back">
                    {Data.map(skill =>{
                       return(
                           <h3>{skill.skills4}</h3>
                       )
                   })}
                    </BackSide>
                </Flippy></li>
                </ul>
                </div>
            </div>
        )
    }
}

export default About;