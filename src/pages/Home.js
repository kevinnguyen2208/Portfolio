import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
import Typist from 'react-typist';
import Button from '../components/Button/Button.js';
import ReactFloaterJs from 'react-floaterjs';
import Helmet from '../resources/img/helmet.png';
import StarfieldAnimation from 'react-starfield-animation';
import { Row, Col } from "react-bootstrap";


class Home extends Component {
    render() {
        
        return (
            <div className="home">

                <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
                    <Col md={2} className="column1">
                        <div className="starfield-animation-home">
                            <StarfieldAnimation
                                style={{
                                    position: 'fixed',
                                    width: '100%',
                                    height: '100%',
                                }}
                            /></div>
                        <div className='home-info'>

                            <Typist avgTypingDelay={50}>
                                <span className="tag-open">&lt;header&gt;</span>
                                <h1 className="home-desc"><strong>Hello World</strong></h1>
                                <span className="tag-close">&lt;/header&gt;</span>

                                <span className="tag-open">&lt;body&gt;</span>
                                <h2 className="home-desc-comment">&lt;!-- name[0] = Le Bao Duy Nguyen --&gt;</h2>
                                <h2 className="home-desc-comment">&lt;!-- name[1] = Kevin Nguyen --&gt;</h2>
                                <span className="tag-in">&lt;job&gt;</span>
                                <h1 className="home-desc"><strong><Typewriter options={{
                                    strings: ['Full-stack Developer', 'Software Engineer', "Game Developer"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 30,
                                    deleteSpeed: 30
                                }} /></strong></h1>
                                <span className="tag-in">&lt;/job&gt;</span>
                                <span className="tag-close">&lt;/body&gt;</span>

                                <span className="tag-open">&lt;footer&gt;</span>
                                <span className="tag-in">&lt;button&gt;</span>
                                <div className="home-desc">
                                    <Button btnColor="#dbdbdb" backColor="#ab260c" model="outline" onClick={event => window.location.href = '/about'} > &lt; More /&gt;
                                    </Button>
                                </div>
                                <span className="tag-in">&lt;/button&gt;</span>
                                <span className="tag-close">&lt;/footer&gt;</span>
                            </Typist>
                        </div>
                    </Col>

                    <Col md={2} className="column2">
                      
                            <ReactFloaterJs>
                                <img className="home-helmet" src={Helmet} />
                            </ReactFloaterJs>
                      
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Home;