import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import stock from "../../Assets/Projects/stock.png";
import crypto from "../../Assets/Projects/crypto.png";
import Quick from "../../Assets/Projects/quickchat.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* First Row */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Archery Website"
              description={`- Developed a dynamic, responsive website for Stock Archery, a financial education platform.
- Built using React.js, Firebase, and Tailwind CSS with a modern, user-friendly interface.
- Implemented secure user authentication and real-time course data.
- Optimized for mobile devices and scalable for future expansion.`}
              ghLink="https://github.com/StockApi-cloud/Website"
              demoLink="https://stockarchery.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="Crypto Tracker"
              description={`- Real-time cryptocurrency tracking web app with live market data.
- Built using React.js, Firebase, Tailwind CSS, and Express.js.
- Supports secure user authentication and data storage.
- Responsive, modern interface for seamless experience across devices.
- Demonstrates integration of frontend and backend for high-performance applications.`}
              ghLink="https://github.com/Nirupamkumar-frontenddeveloper/crypto-tracker"
              demoLink="https://crypto-tracker-ten-pi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition & Emotion Detection"
              description={`- Developed a CNN classifier using the FER-2013 dataset with Keras and TensorFlow.
- Achieved 60.1% accuracy in predicting human emotions.
- Used OpenCV for face detection and fed detected faces to the classifier.
- Delivered a functional pipeline for real-time emotion recognition.`}
              ghLink="https://github.com/Nirupamkumar-frontenddeveloper/Face_And_Emotion_Detection-master"
            />
          </Col>
        </Row>

        {/* Second Row */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Quick}
              isBlog={false}
              title="Quick Chat"
              description={`- Real-time chat application for instant messaging
- Built with React.js, Node.js, Express, and Socket.IO
- Secure user authentication with online/offline status
- Instant message delivery with smooth, lag-free communication
- Fully responsive and user-friendly interface
- Real-time WebSocket communication for efficient data transfer`}
              ghLink="https://github.com/Nirupamkumar-frontenddeveloper/chatquick"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
