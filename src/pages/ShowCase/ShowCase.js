
// External Libraries
import React, {Component} from 'react';

// Internal Libraries
import './ShowCase.css';
import Gallery from '../../components/Gallery/Gallery';
import Controller from '../../components/Controller/Controller';

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
        last: ''
    },
    shirtflirt: {
        link: config.shirtflirt,
        last: ''
    }
};

class ShowCase extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currGroup: 1
        };
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    loadGroup = group => {
        this.setState({currGroup: group});
    }

    render() {

        let Keys = images[this.props.match.params.category].link.keys;
        let Thumbnails = images[this.props.match.params.category].link.thumbnails;
        let Src = images[this.props.match.params.category].link.src;

        let controller = null;

        let uniqueKeys = [];
        for (let key of Keys) {
            if (!uniqueKeys.includes(key)) {
                uniqueKeys.push(key);
            }
        }

        if (uniqueKeys.length!==1) {
            controller = <Controller groups={uniqueKeys} currGroup={this.state.currGroup} loadGroup={this.loadGroup} />;
        } 

        return <div className={cssClassName}>
            {controller}
            <Gallery
                keys={Keys}
                thumbnails={Thumbnails} 
                src={Src}
                currGroup={this.state.currGroup}
                last={images[this.props.match.params.category].last}
                LightBox
            />
        </div>

    }

}

export default ShowCase;

