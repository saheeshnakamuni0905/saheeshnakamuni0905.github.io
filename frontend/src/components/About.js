import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ReactTyped as Typed } from 'react-typed';
import { Fade } from 'react-awesome-reveal';
import '../design/AboutDesign.css';
import { ReactComponent as Illustration } from '../images/proudcoder.svg';
import AboutButton from './AboutButtons';


const About = () => {
  return (
    <div className="hero-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <Fade direction="left" cascade>
              <h2 className="greeting">Hi, I am <span className="highlight">Saheeshna Kamuni</span></h2>
              <h1 className="headline">
                <Typed
                  strings={['Fullstack Developer', 'Frontend Developer', 'Backend Developer']}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </h1>
              <div className="description">
                <p>I am an enthusiastic learner seeking to grow with the company, contributing to its success while expanding my skills. I aim to see projects achieve great heights and aspire to gain insights from team members, enhancing my technical expertise and gaining valuable life lessons.</p>
              </div>
              <div className="button-container">
                <AboutButton as="a" target="_blank" href="https://www.linkedin.com/in/saheeshna-kamuni-30a09b62/" filled>LinkedIn</AboutButton>
                <AboutButton as="a" target="_blank" href="https://github.com/saheeshnakamuni0905" filled>Github</AboutButton>
                </div>
            </Fade>
          </Col>
          <Col md={6} xs={12} className="illustration-container">
            <Fade direction="right">
                <Illustration className="illustration" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;