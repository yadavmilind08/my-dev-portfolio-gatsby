import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
import ResumePhoto from "../images/resume.jpg";
import "../style/resume.scss";

function Resume() {
  const resumeStyles = {
    width: "100%",
    height: "auto",
  };
  return (
    <div className="main">
      <div id="resumeTop" className="header">
        <Link to="/#about" className="ml-0">
          <button
            type="button"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--hero"
          >
            Take me back
          </button>
        </Link>
      </div>
      <Container>
        <div className="image">
          <Fade bottom duration={1000} delay={500} distance="50px">
            <img src={ResumePhoto} alt="resume" style={resumeStyles} />
          </Fade>
        </div>
      </Container>

      <footer className="footer navbar-static-bottom">
        <Container>
          <span className="back-to-top">
            <Link to="#resumeTop" smooth duration={1000}>
              <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
            </Link>
          </span>

          <hr />
          <p className="footer__text">© {new Date().getFullYear()} NizaVera</p>
        </Container>
      </footer>
    </div>
  );
}

export default Resume;
