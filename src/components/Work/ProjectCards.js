import React from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Button, Card } from 'react-bootstrap';

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img style={{ width: '15rem',alignSelf:'center' }} variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title  style={{ textAlign: "center", color:"#05f7ff" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;View Project
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;