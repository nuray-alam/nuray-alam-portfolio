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
            <hr className="text-white" />
            <div id="contact">
                <Contact></Contact>
            </div>
            <hr className="text-white" />
          <div id="projects">
          <Projects></Projects>
          </div>
        </div>
    );
};

export default Home;