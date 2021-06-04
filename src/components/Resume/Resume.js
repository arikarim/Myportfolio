import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="SOFTWARE ENGINEER"
              date="Jan 2020 - Present"
              content={[
                "Spent 1300+ hours mastering algorithms, data structures, and full-stack development while simultaneously developing projects with Ruby, Rails, JavaScript, React, and Redux.",
                " Developed skills in remote pair-programming using GitHub, industry-standard gitflow, and daily standups to communicate and collaborate with international remote developers.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Junior Developers Mentor [Microverse]"
              content={[
                "Mentored junior web developers, providing technical support through code reviews."
              ]}
            />
            <Resumecontent
              title="Technical Support Engineer [Microverse]"
              content={[
                "Conducted multiple code reviews for junior developers on projects built with JavaScript, React, Ruby and Rails, identifying areas of improvement and improving overall code quality.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="NURSING [College of Nursing, Sulaymaniah] "
              date="2016 - 2020"
              content={[`CGPA: ${cgpa} (Till ${sem}th Sem)`]}
            />
            <Resumecontent
              title="6TH BOARD [LARE HIGH SCHOOL,Sulaymaniah]"
              date="2015 - 2016"
              content={["Precentage: 95%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `Current rank in Spoj ${spojRank}`,
                `Current rank in HackerRank  ${hackerrank}`,
                "Top Performer in Code-Break 1.0",
                "Participant in Hack-A-Bit 2019",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
