import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ProjectDetail = () => {
    const { name } = useParams();
    const projects = [
        {
            id: 1,
            name: "E-Bikes",
            imgUrl1: "https://i.ibb.co/6bnyczh/e-bike2.png",
            imgUrl2: "https://i.ibb.co/Km52qTP/e2.png",
            imgUrl3: "https://i.ibb.co/vsTZVYt/e-3.png",
            details: [
                "Implemented dashboard for both normal user and admin",
                "Firebase authentication use to identify the user",
                "Jwt used for the security"
            ],
            description: "Electric bike selling website where customers can buy those products (bikes) and also site owners can add their products dynamically",
            liveSiteLink: "https://e-bikes-d7d23.web.app/",
            clientSideCodeLink: "https://github.com/nuray-alam/E-Bikes-client-side",
            serverSideCodeLink: "https://github.com/nuray-alam/E-Bikes-server-side",
            technologies: [
                "React.js,",
                "Bootstrap",
                "Firebase",
                "Node.js",
                "Mongodb"
            ]
        },
        {
            id: 2,
            name: "TourEase",
            imgUrl1: "https://i.ibb.co/k86zXXn/tour-Ease2.png",
            imgUrl2: "https://i.ibb.co/JCSFswb/t-2.png",
            imgUrl3: "https://i.ibb.co/sqtbX8M/t-3.png",
            details: [
                "You can book any package you want",
                "Firebase authentication use to identify the user",
                "Admin can cancel and approve an order"
            ],
            description: "This is a tourism website where you can book many types of tourism packages for worldwide exploring.",
            liveSiteLink: "https://tourease-4d191.web.app/home",
            clientSideCodeLink: "https://github.com/nuray-alam/tourEase-client-side",
            serverSideCodeLink: "https://github.com/nuray-alam/tourEase-server-side",
            technologies: [
                "React.js,",
                "Bootstrap",
                "Firebase",
                "Node.js",
                "Mongodb"
            ]
        },
        {
            id: 3,
            name: "LifeCare",
            imgUrl1: "https://i.ibb.co/vDG6yfQ/Life-Care2.png",
            imgUrl2: "https://i.ibb.co/28DFcHH/l2.png",
            imgUrl3: "https://i.ibb.co/L84q13L/l3.png",
            details: [
                "You can make an appointment using this site",
                "You can find health related blogs daily",
                "You can have free online consultation using this site"
            ],
            description: "This is a website for LifeCare Medical Clinic. User can make appointments, book beds and take consultancy over online.",
            liveSiteLink: "https://healthcare-related-websi-163fd.web.app/",
            clientSideCodeLink: "https://github.com/nuray-alam/lifeCare-medical-center",
            technologies: [
                "React.js,",
                "Bootstrap",
                "Firebase",
            ]
        }

    ]
    const project = projects.find(project => project.name === name);
    return (
        <Container className="my-5">
            <Row>
                <Col xs={12} md={8} data-aos="zoom-in" data-aos-duration="2000">
                    <h3 className="text-white">{project.name}</h3>
                    <div className="mb-3">
                        <img src={project.imgUrl1} className="me-2 img-fluid mb-2" alt="" />
                        <br />
                        <img src={project.imgUrl2} className="me-2 img-fluid mb-2" alt="" />
                        <br />
                        <img src={project.imgUrl3} className="img-fluid" alt="" />
                    </div>

                    <a href={project.liveSiteLink} target="_blank" className="btn btn-outline-primary me-3 mt-2">Live Site</a>
                    <a href={project.clientSideCodeLink} target="_blank" className="btn btn-outline-primary me-3 mt-2">Client side Code</a>
                    {
                        project.serverSideCodeLink && <a href={project.serverSideCodeLink} target="_blank" className="btn btn-outline-primary me-3 mt-2">Server side Code</a>}
                </Col>
                <Col xs={12} md={4} className="border rounded p-3 mt-3" data-aos="zoom-in" data-aos-duration="2000">
                    {/* <h4 className="text-white">Details</h4> */}
                    <hr className="mt-4 mb-2" style={{ color: "#007CED", margin: "0px auto" }} />
                    <h5 className="text-white">Details</h5>
                    <hr className="mb-2" style={{ color: "#007CED", margin: "0px auto" }} />
                    <p className=" my-3" style={{ color: "#CC6666" }}>{project.description}</p>
                    <ul>
                        {
                            project.details.map(detail => <li key={detail} className="" style={{ color: "#CC6666" }}>{detail}</li>)
                        }
                    </ul>
                    <hr className="mt-4 mb-2" style={{ color: "#007CED", margin: "0px auto" }} />
                    <h5 className="text-white">Technologies</h5>
                    <hr className="mb-2" style={{ color: "#007CED", margin: "0px auto" }} />
                    {
                        project.technologies.map(tech => <p key={tech} className="me-3" style={{ color: "#CC6666" }}>{tech}</p>)
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectDetail;