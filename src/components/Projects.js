import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import mockInterview from "../assets/img/proj2.png";
import forecastIq from "../assets/img/forecastiq.png";
import interactiveCalendar from "../assets/img/interactive-calendar.png";
import golfCharityPlatform from "../assets/img/golf-charity-platform.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "AI Mock Interview Preparation",
      description:
        "An interview practice platform where AI asks role-specific questions, evaluates responses, and helps candidates improve confidence through realistic mock sessions.",
      imgUrl: mockInterview,
      githubUrl: "https://github.com/poorvi-135/ai_mock_interview",
    },
    {
      title: "ForecastIQ - AI Forecasting Dashboard",
      description:
        "A forecasting and analytics dashboard that predicts trends, flags anomalies, and presents plain-language AI insights to support better business decisions.",
      imgUrl: forecastIq,
      githubUrl: "https://github.com/poorvi-135/AI_Forecast",
    },
    {
      title: "Interactive Calendar",
      description:
        "A modern calendar app with intuitive date-range selection, quick filters, and note-taking support for better daily and weekly planning.",
      imgUrl: interactiveCalendar,
      githubUrl: "https://github.com/poorvi-135/calender",
    },
    {
      title: "Golf Charity Platform",
      description:
        "A full-stack platform for golf draws and charity contributions with performance analytics, subscription tracking, and transparent reporting.",
      imgUrl: golfCharityPlatform,
      githubUrl: "https://github.com/poorvi-135/golf-charity-platform",
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
                  <p className="project-intro">Selected projects that combine AI, product thinking, and full-stack development.</p>
                  <Row className="project-grid g-4 mt-2">
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            index={index}
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
