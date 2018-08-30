
//External Libraries
import React, {Fragment} from 'react';

//Internal Libraries
import './Section.css';

//Custom Imports
const strtojsx = require('react-string-replace');

let cssClassName = 'Section';

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
        let i = 0;
        for (let path of props.images) {
            images.push(<img key={i++} src={path} alt="Not Available" className={cssClassName+'img'}/>);
        }
        gallery =  <Fragment><br /><br />{images}<br /><br /></Fragment>;
    }

    if (props.button!=null && props.click!=null) {
        button = <button className={cssClassName+"btn"} onClick={props.click}>{props.button}</button>
    }

    if (props.darken){
        bgcolor = '#F0F0F0';
    }

    return <div style={{backgroundColor: bgcolor, width: '100%'}}> 
        <div className={cssClassName}>
            {title}
            {subtext}
            {gallery}
            {button}
        </div>
    </div>;
}

export default Section;

