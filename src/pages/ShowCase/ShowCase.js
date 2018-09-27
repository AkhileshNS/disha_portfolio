
// External Libraries
import React, {Component} from 'react';

// Internal Libraries
import './ShowCase.css';
import Gallery from '../../components/Gallery/Gallery';

// Configuration Images
import config from '../../Config';

let cssClassName = 'ShowCase';

let images = {
    black_and_white: {
        link: config.black_and_white, 
        last: '2'
    }, 
    main: {
        link: config.main, 
        last: '12'
    },
    brandcampaign: {
        link: config.brandcampaign, 
        last: '01'
    }
};

class ShowCase extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {

        return <div className={cssClassName}>
            <Gallery 
                thumbnails={images[this.props.match.params.category].link.thumbnails} 
                src={images[this.props.match.params.category].link.src}
                last={images[this.props.match.params.category].last}
                LightBox
            />
        </div>

    }

}

export default ShowCase;

