import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './Projects.css'

const Projects = () => {
    return (
        <Container className="my-5 pb-5">
            <h2 className="text-white text-center mb-5">Projects</h2>
            <Row xs={1} md={2} lg={3}>
                <Col>
                    <div className="project text-justify py-2 px-3 card h-100 d-flex flex-column justify-content-between">

                        <div>
                            <img src="https://i.ibb.co/6bnyczh/e-bike2.png" className="img-fluid" alt="" />

                        </div>
                        <div>
                            <h4 className="text-dark mt-1">E-Bikes</h4>
                            <p>description</p>
                            <a href="https://e-bikes-d7d23.web.app/" className="btn btn-dark">Live Site</a>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="project text-justify py-2 px-3 card h-100 d-flex flex-column justify-content-between">

                        <div>
                            <img src="https://i.ibb.co/k86zXXn/tour-Ease2.png" className="img-fluid" alt="" />

                        </div>
                        <div>
                            <h4 className="text-dark mt-1">TourEase</h4>
                            <p>description</p>
                            <a href="https://tourease-4d191.web.app/home" className="btn btn-dark">Live Site</a>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="project text-justify py-2 px-3 card h-100 d-flex flex-column justify-content-between">

                        <div>
                            <img src="https://i.ibb.co/vDG6yfQ/Life-Care2.png" className="img-fluid" alt="" />

                        </div>
                        <div>
                            <h4 className="text-dark mt-1">LifeCare</h4>
                            <p>description</p>
                            <button href="https://healthcare-related-websi-163fd.web.app/" className="btn btn-dark">Live Site</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;