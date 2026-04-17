import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => { 
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <h2>Poorvi<span style={{ color: "#00d8ff" }}>Dev</span></h2>
            <h5 style={{ color: "white", marginTop: "12px" }}><img 
    src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" 
    alt="Gmail Icon" 
    style={{ width: "20px", height: "20px", marginRight: "10px" }} 
  />
  agarwalpoorvi060@gmail.com</h5>
          </Col>

          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mt-4">
              <a href="https://www.linkedin.com/in/agarwalpoorvi060/?originalSubdomain=in"
  target="_blank"
  rel="noopener noreferrer"><img src={navIcon1} alt="Icon" /></a>
             
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
