
//External Libraries
import React, {Component} from 'react';

//Internal Libraries
import './ShirtFlirt.css';
import '../../global.css';
import Gallery from '../../components/Gallery/Gallery';
import {shirtflirt} from '../../Config';

let cssClassName = 'Shirtflirt';

class ShirtFlirt extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return <div className={cssClassName}>
            <Gallery src={shirtflirt.src} thumbnails={shirtflirt.thumbnails}/>
        </div>;
    }

}

export default ShirtFlirt;