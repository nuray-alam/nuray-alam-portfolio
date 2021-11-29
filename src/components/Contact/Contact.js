import React, { useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const Contact = () => {
    const formId = useRef();

    // handling form submit
    const onSubmit = e => {

        e.preventDefault();

        emailjs.sendForm('service_bxh4sjn', 'template_xfaxc85', formId.current, 'user_WIHm7a7NWhMljgFvccPa5')
            .then((result) => {
                console.log(result.text);
                alert("You message received successfully. I will contact you soon");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });

    }

    return (
        <Container className="my-5">
            <h2 className="text-white text-center mb-2">Contact Me</h2>
            <Row xs={1} md={2} lg={2} >
                <Col className="mb-5">
                    <form ref={formId} onSubmit={onSubmit}>
                        <label className="text-white fs-5">Full Name:</label>
                        <input type="text" className="form-control" required name="name" />
                        <br />
                        <label className="text-white fs-5">Email:</label>
                        <input type="email" className="form-control" required name="email" />
                        <br />
                        <label className="text-white fs-5">Phone Number:</label>
                        <input type="text" className="form-control" required name="phone" />
                        <br />
                        <label className="text-white fs-5">Message:</label>
                        <br />
                        <textarea name="message" required className="mb-3 form-control" />
                        <br />
                        <input type="submit" className="btn btn-primary" value="Send" />
                    </form>

                </Col>
                <Col className="d-flex flex-column justify-content-center">

                    <div className="mb-3">
                        <i className="fas fa-phone-square-alt fs-3 text-primary"></i>
                        <span className='text-white fs-5 ms-3'>+88 01790745608</span>
                    </div>
                    <div className="mb-3">
                        <i className="fas fa-map-marker-alt text-primary fs-3"></i>
                        <span className='text-white fs-5 ms-3'>1/1 Circular Road, Kalabagan, Dhaka - 1205, Bangladesh</span>
                    </div>
                    <div>
                        <i className="fas fa-envelope text-primary fs-3"></i>
                        <span className='text-white fs-5 ms-3'>nuray.alam24@gmail.com</span>
                    </div>

                </Col>
            </Row>

        </Container>
    );
};

export default Contact;