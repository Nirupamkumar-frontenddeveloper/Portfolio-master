import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const descriptionStyle = {
    paddingLeft: "0",
    margin: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem", // consistent vertical gap
  };

  const lineStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem",
    lineHeight: "1.5", // consistent line height
    padding: "2px 0", // subtle padding for each line
    wordBreak: "break-word", // prevents overflow
  };

  return (
    <Card className="project-card-view" style={{ marginBottom: "1.5rem", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", borderRadius: "8px" }}>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ borderRadius: "8px 8px 0 0" }} />
      <Card.Body>
        <Card.Title style={{ fontWeight: "600", marginBottom: "1rem" }}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <ul style={descriptionStyle}>
            {props.description.split("\n").map((line, index) => (
              <li key={index} style={lineStyle}>
                {line}
              </li>
            ))}
          </ul>
        </Card.Text>

        <Button variant="primary" href={props.ghLink} target="_blank" style={{ marginBottom: "0.5rem" }}>
          <BsGithub /> &nbsp;{props.isBlog ? "Blog" : "GitHub"}
        </Button>

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px", marginBottom: "0.5rem" }}
          >
            <CgWebsite /> &nbsp;Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
