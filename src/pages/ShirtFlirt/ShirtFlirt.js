
//External Libraries
import React, {Component} from 'react';

//Internal Libraries
import './ShirtFlirt.css';
import '../../global.css';
import Gallery from '../../components/Gallery/Gallery';
import config from '../../Config';

let cssClassName = 'Shirtflirt';

class ShirtFlirt extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return <div className={cssClassName}>
            <Gallery src={config.shirtflirt.src} thumbnails={config.shirtflirt.thumbnails}/>
        </div>;
    }

}

export default ShirtFlirt;