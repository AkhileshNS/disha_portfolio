
//External Libraries
import React, {Fragment} from 'react';

//Internal Libraries
import '../../global.css'
import './Section.css';
import Gallery from '../Gallery/Gallery';

//Custom Imports
const strtojsx = require('react-string-replace');

let cssClassName = 'Section';
let SectionStyle = {};

const Section = (props) => {

    let title, subtext, gallery, button,icon,contactdetails,layout,bgcolor = '#F7F7F7';

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
                src={props.images.src}
                thumbnails={props.images.thumbnails} 
                Style={{width: 'calc(33.3% - 8px)', paddingTop: '8px', paddingLeft: '4px', paddingRight: '4px'}}
            />
        <br /><br /></Fragment>;
    }

    if (props.button!=null && props.click!=null) {
        button = <button className="button" onClick={props.click}>{props.button}</button>
    }

    if (props.darken){
        bgcolor = '#F0F0F0';
    }

    if (props.icon!=null) {
        icon = <div className={cssClassName + 'container'}>
            <img src={props.icon} alt="Unavailable" className={cssClassName+'img'}/>
        </div>;
        contactdetails = <div className={cssClassName + 'contact'}>
            <p className={cssClassName+'title'} style={{marginTop: '25px'}}>{props.title}</p>
            <p className={cssClassName+'desc'}>{props.subtext}</p>
        </div>;
        title = null;
        subtext = null;
        layout = <div className={cssClassName+'about'}>{icon}{contactdetails}</div>
    }

    return <div style={{backgroundColor: bgcolor, width: '100%'}}> 
        <div className={cssClassName} style={SectionStyle}>
            {title}
            {subtext}
            {gallery}
            {button}
            {layout}
        </div>
    </div>;
}

export default Section;

