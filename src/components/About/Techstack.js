import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiRails, SiPostgresql } from "react-icons/si";
import {
  DiJavascript1,
  DiReact,
  DiRubyRough,
  DiBootstrap,
  DiGit,
  DiSass,
  DiCss3
} from "react-icons/di";
import { SiRedux } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRails />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRubyRough />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
    </Row>
  );
}

export default Techstack;
