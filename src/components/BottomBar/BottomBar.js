//External Libraries
import React, {Component} from 'react';
import Radium from 'radium';
import {withRouter} from 'react-router-dom';

//Internal Libraries
import InstaImg from '../../assets/insta_btn.svg';

let BottomBarStyle = {
    width: '100%',
    backgroundColor: '#F0F0F0'
};

let InstaBtnStyle = {
    width: '100%',
    height: '30px',
    marginTop: '7px',
    marginBottom: '4px',
    cursor: 'pointer',
    ':hover': {
        height: '32px',
        marginTop: '6px',
        marginBottom: '3px',
        transform: 'rotate(360deg)',
        transition: 'all 0.5s ease'
    }
};

class BottomBar extends Component {
    render() {

        let path = this.props.location.pathname;

        if (path==='/' || path==='/contact') {
            BottomBarStyle['backgroundColor'] = '#F7F7F7';
        } else {
            BottomBarStyle['backgroundColor'] = '#F0F0F0';
        }

        return <div style={BottomBarStyle}>
            <img src={InstaImg} alt="Instagram" style={InstaBtnStyle} onClick={() => window.open('https://www.instagram.com/dishakhanted/?hl=en')}/>
        </div>;
    }
}

export default withRouter(Radium(BottomBar));