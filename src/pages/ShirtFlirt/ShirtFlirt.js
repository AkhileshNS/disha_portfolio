
//External Libraries
import React, {Component} from 'react';

//Internal Libraries
import './ShirtFlirt.css';
import '../../global.css';
import Dummy from '../../assets/dummy_img.jpg';
import Gallery from '../../components/Gallery/Gallery';

let cssClassName = 'Shirtflirt';

let dummys = [];

for (let i=0;i<30;i++) {
    dummys.push(Dummy);
}

class ShirtFlirt extends Component {

    render() {
        return <div className={cssClassName}>
            <Gallery images={dummys}/>
        </div>;
    }

}

export default ShirtFlirt;