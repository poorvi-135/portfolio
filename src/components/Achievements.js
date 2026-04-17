import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

const leetCodeProfileUrl = "https://leetcode.com/u/poorvi31/";

export const Achievements = () => {
  const achievements = [
    {
      title: "Hackathon Participant",
      description:
        "Actively participated in hackathons to build real-world solutions under deadlines, collaborate in teams, and improve product execution skills.",
      badge: "Hackathon",
    },
    {
      title: "2 LeetCode Badges Achieved",
      description:
        "Earned two badges on LeetCode through consistent challenge participation and strong problem-solving performance.",
      badge: "Badges",
      link: leetCodeProfileUrl,
      linkLabel: "View LeetCode Profile",
    },
    {
      title: "350+ Problems Solved",
      description:
        "Solved more than 350 problems on LeetCode across core topics like arrays, strings, recursion, trees, and dynamic programming.",
      badge: "LeetCode 350+",
      link: leetCodeProfileUrl,
      linkLabel: "View LeetCode Profile",
    },
    {
      title: "NatWest Code for Purpose",
      description:
        "Qualified Round 1 in NatWest Code for Purpose, demonstrating strong programming fundamentals and practical solution design.",
      badge: "Round 1 Qualifier",
    },
  ];

  return (
    <section className="achievements" id="achievements">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
              <h2>Achievements</h2>
              <p>
                Highlights that reflect my consistency in competitive coding,
                collaboration, and real-world problem solving.
              </p>
              <Row className="g-4 mt-1">
                {achievements.map((item, index) => (
                  <Col key={item.title} xs={12} md={6} lg={4}>
                    <article
                      className="achievement-card"
                      style={{ animationDelay: `${index * 0.12}s` }}
                    >
                      <span className="achievement-badge">{item.badge}</span>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                      {item.link ? (
                        <a href={item.link} target="_blank" rel="noreferrer">
                          {item.linkLabel}
                        </a>
                      ) : null}
                    </article>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
