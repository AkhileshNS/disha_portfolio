//External Libraries
import React, {Component} from 'react';

//Internal Libraries
import InstaImg from '../../assets/insta_btn.svg';
import './BottomBar.css';

class BottomBar extends Component {
    render() {
        return <div className='BottomBar'>
            <p className='BottomBartext'>DishaKhanted</p>
            <img src={InstaImg} alt="Instagram" className='BottomBarimg' onClick={() => window.open('https://www.instagram.com/dishakhanted/?hl=en')}/>
            <p className='BottomBartext'>Copyright {new Date().getFullYear()}</p>
        </div>;
    }
}

export default BottomBar;