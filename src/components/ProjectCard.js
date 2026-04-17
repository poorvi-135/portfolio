import { Col } from "react-bootstrap";

export const ProjectCard = ({ index, title, description, imgUrl, githubUrl }) => {
  return (
    <Col size={12} sm={12} md={6} className="project-card-wrap">
      <article className="proj-imgbx card-enter" style={{ animationDelay: `${index * 0.12}s` }}>
        <img src={imgUrl} alt={title} className="proj-thumb" />
        <div className="proj-card-content">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="proj-links">
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </article>
    </Col>
  );
};
