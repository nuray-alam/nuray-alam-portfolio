import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Project = (props) => {

    const { id, name, imgUrl1, description, liveSiteLink, clientSideCodeLink, serverSideCodeLink } = props.project;
    let history = useHistory();
    const handleDetailButton = () => {
        const url = `/project/${name}`
        history.push(url);
    }

    return (
        <Col className="my-2" data-aos="zoom-in" data-aos-duration="2000">
            <div className="project text-justify py-2 px-3 card h-100 d-flex flex-column justify-content-between">

                <div>
                    <img src={imgUrl1} className="img-fluid" alt="" />

                </div>
                <div>
                    <h4 className="text-dark mt-1">{name}</h4>
                    <p>{description}</p>
                    <a href={liveSiteLink} target="_blank" className="btn btn-dark me-3">Live Site</a>
                    <button className="btn btn-dark" onClick={handleDetailButton}>Detail</button>
                </div>
            </div>
        </Col>
    );
};

export default Project;