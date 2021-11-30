import React from 'react';
import { Container } from 'react-bootstrap';

const Skills = () => {
    return (
        <Container className="my-5" data-aos="zoom-in" data-aos-duration="1500">
            <h2 className="text-white text-center mb-2">Skills</h2>

            <div className="" >
                <h5 className="text-white">Frontend</h5>
                <p className="text-white">
                    <span className="me-3 mt-2 btn btn-outline-primary">Javascript</span>
                    <span className="me-3 mt-2 btn btn-outline-primary">React(.js)</span>
                    <span className="me-3 mt-2 btn btn-outline-primary">Bootstrap</span>
                    <span className="me-3 mt-2 btn btn-outline-primary">Material-UI</span>
                    <span className="me-3 mt-2 btn btn-outline-primary">HTML</span>
                    <span className=" mt-2 btn btn-outline-primary">CSS</span>
                </p>
            </div>
            <div className="" >
                <h5 className="text-white">Backend</h5>
                <p className="text-white">
                    <span className="me-3 mt-2 btn btn-outline-primary">Node.js</span>
                    <span className="mt-2 btn btn-outline-primary">express</span>
                </p>
            </div>
            <div className="" >
                <h5 className="text-white">Database</h5>
                <p className="text-white">
                    <span className="mt-2 btn btn-outline-primary">Mongodb</span>
                </p>
            </div>
            <div className="">
                <h5 className="text-white">Tools</h5>
                <p className="text-white">
                    <span className="me-3 mt-2 btn btn-outline-primary">Vscode</span>
                    <span className="me-3 mt-2 btn btn-outline-primary">git</span>
                    <span className="me-3 mt-2 btn btn-outline-primary">Firebase</span>
                    <span className="me-3 mt-2 btn btn-outline-primary">Heroku</span>
                    <span className=" mt-2 btn btn-outline-primary">Netlify</span>
                </p>
            </div>

        </Container>
    );
};

export default Skills;