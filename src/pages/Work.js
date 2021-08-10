import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "../components/Work/ProjectCards";
import AS from "../resources/img/amazonstore.png";
import GA from "../resources/img/gamingai.png";
import S from "../resources/img/store.png";
import V from "../resources/img/virus.png";
import P from "../resources/img/portfolio.png";
import AA from "../resources/img/androidapp.png";
import BS from "../resources/img/battleship.png";
import TOS from "../resources/img/tutoronlineservice.png";


function Work() {
    return (
        <Container fluid className="project-section">

            <Container>
                <h1 className="project-heading">
                    My<strong className="purple">[WORKS]</strong>
                </h1>
             
                <Row style={{ justifyContent: "center", paddingBottom: "40px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={AS}
                            title="e-Commerce Store"
                            description="MERN stack e-Commerce web app that allows user to view and purchase products. Include admin and user login with CRUD tasks only available to admin. Inspired by Amazon"
                            link="https://github.com/kevinnguyen2208/MERN-stack-e-Commerce-store"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={TOS}
                            title="PAI Studio Tutor Mobile Application"
                            description="In Progress: React Native application that let user book appointment, navigation, etc. "
                            link="https://github.com/kevinnguyen2208/Data-Structure-Patterns"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={P}
                            title="Portfolio"
                            description="Portfolio created using ReactJS and Bootstrap"
                            link="https://github.com/kevinnguyen2208/Portfolio"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={V}
                            title="Space Invaders (Virus Edition)"
                            description="Unity 2D game inspired by Space Invader with a little twist... "
                            link="https://github.com/kevinnguyen2208/Space-Invaders-Virus-Edition"
                        />
                    </Col>

                    

                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={BS}
                            title="Battle Ship"
                            description="Implementation of the classic Battleship game using Visual Basic .Net"
                            link="https://github.com/kevinnguyen2208/Battle-Ships"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={S}
                            title="Computer Store"
                            description="Java application of a computer store that let user enter, search, view, purchase product"
                            link="https://github.com/kevinnguyen2208/Bookstore"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={AA}
                            title="Android Application"
                            description="Android simple apps (calculation, showing images, user form) using Kotlin"
                            link="https://github.com/kevinnguyen2208/Android-Calculator---Image-Form"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCards
                            imgPath={GA}
                            title="Gaming AI"
                            description="Gaming AIs coded with Python to investigate patterns and behaviours"
                            link="https://github.com/kevinnguyen2208/Gaming-AI"
                        />
                    </Col>

                    
                </Row>
            </Container>
        </Container>
    );
}

export default Work;