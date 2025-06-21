import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import stock from "../../Assets/Projects/stock.png";
import crypto from "../../Assets/Projects/crypto.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Archery Website"
              description="Developed a dynamic, responsive website for Stock Archery, a financial education platform, using React.js, Firebase, and Tailwind CSS. The single-page application features a modern, user-friendly interface with secure user authentication, real-time course data, and mobile-optimized design. By leveraging React’s component-based architecture, Firebase’s backend capabilities, and Tailwind’s utility-first styling, I delivered a scalable, high-performance platform that effectively promotes Stock Archery’s stock market and crypto training services."
              ghLink="https://github.com/StockApi-cloud/Website"
              demoLink="https://stockarchery.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto-Tracker"
              description="Built a Crypto Tracker, a dynamic web application for real-time cryptocurrency price tracking, using React.js, Firebase, Tailwind CSS, and Express.js. The platform delivers a seamless user experience with live market data, user authentication, and a responsive, modern interface. React.js enabled a modular, component-driven frontend, while Express.js powered a robust API to fetch and process crypto data. Firebase handled secure user authentication and data storage, and Tailwind CSS ensured a sleek, mobile-friendly design. This project showcases my ability to integrate frontend and backend technologies to create a high-performance, user-focused application."
              ghLink="https://github.com/Nirupamkumar-frontenddeveloper/crypto-tracker"
              demoLink="https://crypto-tracker-ten-pi.vercel.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/Nirupamkumar-frontenddeveloper/Face_And_Emotion_Detection-master"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
