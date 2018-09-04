
// External Libraries
import React, {Component} from 'react';

// Internal Libraries
import './ShowCase.css';
import Gallery from '../../components/Gallery/Gallery';

// Configuration Images
import {blackandwhite, main, brandcampaign} from '../../Config';

let cssClassName = 'ShowCase';

let images = {blackandwhite,main,brandcampaign};

class ShowCase extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {

        return <div className={cssClassName}>
            <Gallery 
                thumbnails={images[this.props.match.params.category].thumbnails} 
                src={images[this.props.match.params.category].src}
            />
        </div>

    }

}

export default ShowCase;

