import React, { useState, useEffect }  from "react";
import { useParams } from "react-router-dom";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import {
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaSpotify,
} from "react-icons/fa";

          
export const Portfolio = () => {
  
  const [search, setSearch] = useState("Wordpress");
  console.log(search)

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <Link to="/">
              <FaArrowLeft className="secondaryHighlight back" />
            </Link>
            <br/><br/>
            <h1 className="display-4 mb-4 highlight"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <input
          className="form-control form"
          placeholder="Recherche de technologie"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="mb-5">
          {dataportfolio
            /*.filter((data) => (
              data.technologies.includes(search)
            ))*/
            .map((data, i) => {
              return (
                <div key={i} className="item">
                  <hr className="t_border my-4 ml-0 text-left" />
                  {i % 2 == 0 ?
                    <Row>
                      <Col lg="4" md="12">
                        <img src={data.img} alt="" />
                      </Col>
                      <Col lg="7" md="12" className="text">
                        <h2 className="title highlight">{data.title}</h2>
                        <p className="description">{data.desctiption}</p>
                        <div className="technologies">
                          <span className="highlight">Technologies: </span><p>{data.technologies}</p>
                        </div>
                      </Col>
                    </Row>
                    :
                    <Row>
                      <Col lg={{ span: 4, order: 'last' }} md={{ span: 12, order: 'first' }}>
                        <img src={data.img} alt="" />
                      </Col>
                      <Col lg={{ span: 7, order: 'first' }} md={{ span: 12, order: 'last' }} className="text">
                        <h2 className="title highlight">{data.title}</h2>
                        <p className="description">{data.desctiption}</p>
                        <div className="technologiesFlipped">
                          <span className="highlight">Technologies: </span><p>{data.technologies}</p>
                        </div>
                      </Col>
                    </Row>
                  }
                  <div className="buttonContainer">
                    <a href={data.link} target="_blank" className="text_2">
                      <div id="button_p" className="ac_btn btn">
                        Voir le projet
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </a>
                    {data.github ? 
                      <a className="github" href={data.github} target="_blank">
                        <FaGithub />
                      </a>
                      :
                      ""
                    }
                    
                  </div>
                  <br/>
                </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
