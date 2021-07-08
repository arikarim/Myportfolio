import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  const styles = {
    image: {
      width: "100%",
      height: "15rem",
    }
  }
  return (
    <Card className="project-card-view">
      <Card.Img style={styles.image} variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
          <Button variant="primary" href={props.link} target="_blank">
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? "View Blog" : "View Project"}
          </Button>
          <Button className="mx-2 my-2 button-project" variant="primary" href={props.link2} target="_blank">
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? "View Blog" : "View Live"}
          </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
