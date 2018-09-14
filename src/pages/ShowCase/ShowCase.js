
// External Libraries
import React, {Component} from 'react';

// Internal Libraries
import './ShowCase.css';
import Gallery from '../../components/Gallery/Gallery';

// Configuration Images
import config from '../../Config';

let cssClassName = 'ShowCase';

let images = {black_and_white: config.black_and_white, main: config.main, brandcampaign: config.brandcampaign};

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

