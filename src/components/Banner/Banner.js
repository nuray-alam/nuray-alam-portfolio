import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
const Banner = () => {
    return (
        <Container className="text-white my-5 banner"  data-aos="fade-up">
            <Row xs={1} md={2} lg={2} g={3} className="py-5">
                <Col>
                    <img className="img-fluid profile-img" src="https://i.ibb.co/tP4XmZs/small.jpg" alt="" />
                </Col>
                <Col>
                    <h4 className="gray-text">MERN Developer</h4>
                    <h1>Md. Nuray Alam Siddik</h1>
                    <p className="gray-text">Being an enthusiast about web development I want to join a software company where I can show my
                        passion about programming and dedicate myself to serve the software industry.
                    </p>
                    <a href="https://drive.google.com/uc?export=download&id=16lz1tnSjMd9piaL_MkQXAbwzShIDBw4P" className='banner-button text-decoration-none text-white mx-2 px-3 py-2'>Download Resume</a>
                    <a href="#contact" className='banner-button text-white text-decoration-none mx-2 px-3 py-2'>Contact</a>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;