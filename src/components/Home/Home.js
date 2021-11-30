import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div id="about">
                <Banner></Banner>
            </div>
            {/* <hr className="text-white" /> */}
            <hr className="" style={{ color: "#007CED", width: "75%", margin: "0px auto" }} />
            <div id="projects">
                <Projects></Projects>
            </div>
            {/* <hr className="text-white" /> */}
            <hr className="" style={{ color: "#007CED", width: "75%", margin: "0px auto" }} />
            <div id="contact">
                <Contact></Contact>
            </div>

        </div>
    );
};

export default Home;