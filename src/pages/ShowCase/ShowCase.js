
// External Libraries
import React, {Component} from 'react';

// Internal Libraries
import './ShowCase.css';
import dummy from '../../assets/dummy_img.jpg';
import Gallery from '../../components/Gallery/Gallery';

let cssClassName = 'ShowCase';

let images = {
    blackandwhite: [dummy, dummy, dummy, dummy, dummy, dummy, dummy, dummy],
    main: [dummy, dummy, dummy, dummy, dummy, dummy, dummy, dummy, dummy, dummy, dummy, dummy],
    brandcampaign: [dummy, dummy, dummy, dummy, dummy, dummy, dummy, dummy,dummy, dummy, dummy, dummy, dummy, dummy, dummy, dummy]
};

class ShowCase extends Component {

    render() {

        return <div className={cssClassName}>
            <Gallery images={images[this.props.match.params.category]}/>
        </div>

    }

}

export default ShowCase;

