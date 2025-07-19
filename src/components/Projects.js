import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import project1 from "../assets/img/project1.png";
import proj2 from "../assets/img/proj2.png";
import proj3 from "../assets/img/proj3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "AI Mock Interview Preparation",
      description: "For interview preparation where an AI agent acts as the interviewer.",
      imgUrl: proj2,
    },
    {
      title: "House Price Prediction",
      description: "Predicts house prices based on input parameters.",
      imgUrl: project1,
    },
    {
      title: "Weather App",
      description: "Get weather by entering a state name.",
      imgUrl: proj3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some of the projects I've worked on recently.</p>
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="decor" />
    </section>
  );
};
