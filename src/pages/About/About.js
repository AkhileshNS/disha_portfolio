
// External Libraries
import React from 'react';

// Internal Libraries
import './About.css';
import dummy from '../../assets/dummy_img.jpg';

let cssClassName = 'About';

const About = (props) => {
    return <div className={cssClassName}>
        <div>
            <img src={dummy} alt="Unavailable" />
            <p>Disha Khanted</p>
            <span>Photographer Disha Khanted spent the last couple of years photographing landscapes and people, when she found that her passion lies in portrait and fashion photography. It all began when she simply grabbed the camera lying in her home, and ventured out to shoot anything and everything that could be captured through a camera lens.</span>
            <span>Starting off with small count of followers, the number has risen exponentially over a span of 2 years. Not only does she play the role of a photographer, but also the roles of an editor and a stylist. She is also self taught in the techniques of lighting, angles and settings.</span>
            <span>Her network contains an extensive web of contacts with models, make-up artists and stylists. Disha now does freelance photo-shoots and also works with designers and models in Bangalore.</span>
        </div>
    </div>;
}

export default About;