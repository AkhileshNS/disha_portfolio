
//External Libraries
import React, {Fragment} from 'react';

//Internal Libraries
import './Section.css';
import Gallery from '../Gallery/Gallery';

//Custom Imports
const strtojsx = require('react-string-replace');

let cssClassName = 'Section';
let SectionStyle = {};

const Section = (props) => {

    let title, subtext, gallery, button, bgcolor = '#F7F7F7';
    let images = [];

    if (props.title!=null) {
        title = <p className={cssClassName+"title"}>{props.title}</p>
    }

    if (props.subtext!=null) {
        let desc = strtojsx(props.subtext, '\n', (e, i) => <br key={i}/>);
        subtext = <p className={cssClassName+"subtext"}>{desc}</p>
    }

    if (props.images!=null) {
        gallery = <Fragment><br /><br />
            <Gallery 
                images={props.images} 
                Style={{width: 'calc(33.3% - 8px)', paddingTop: '8px', paddingLeft: '4px', paddingRight: '4px'}}
            />
        <br /><br /></Fragment>;
    }

    if (props.button!=null && props.click!=null) {
        button = <button className={cssClassName+"btn"} onClick={props.click}>{props.button}</button>
    }

    if (props.darken){
        bgcolor = '#F0F0F0';
    }

    return <div style={{backgroundColor: bgcolor, width: '100%'}}> 
        <div className={cssClassName} style={SectionStyle}>
            {title}
            {subtext}
            {gallery}
            {button}
        </div>
    </div>;
}

export default Section;

