import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import movie from "../../Assets/Projects/moviee.png";
import trend from "../../Assets/Projects/trend.png";
import weather from "../../Assets/Projects/s1.png";

import fb from "../../Assets/Projects/fb.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={trend}
              isBlog={false}
              title="Trending Hub"
              description="Trending Hub is a Movie website application built with React, Users can see trending, TV Series, Movies, and Search for movies, also they can filter the results. "
              link="https://github.com/arikarim/Trending-Hub"
              link2="https://arikarim.github.io/Trending-Hub/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Time"
              description="Movie time project, Users can create categories and movies of their choice, where they create movies and give title, description and a photo about it and other users can vote for the movies they like."
              link="https://github.com/arikarim/Movie-Time"
              link2="https://moveitime.herokuapp.com/"
            />
          </Col>


          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Wide"
              description="Weather Wide is a Weather application built with `React, CSS, and Weather-API`, you can search across the globe or find out your local weather just by typing your city name. "
              link="https://github.com/arikarim/Weather-Wide"
              link2="https://arikarim.github.io/Weather-Wide/"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={6} lg={4} className="blog-card">
            <BlogCard
              imgPath={fb}
              link="https://arikarim146.medium.com/facebook-omniauth-with-devise-ruby-on-rails-29dcf83cbf19"
              title="Login with Facebook in Rails 6 and Devise."
              site="medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
