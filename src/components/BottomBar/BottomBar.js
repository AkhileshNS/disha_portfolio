//External Libraries
import React from 'react';

//Internal Libraries
import InstaImg from '../../assets/insta_btn.svg';

let BottomBarStyle = {
    width: '100%',
    backgroundColor: '#F7F7F7'
};

let InstaBtnStyle = {
    width: '100%',
    height: '30px',
    marginTop: '7px',
    marginBottom: '4px',
    cursor: 'pointer'
};

const BottomBar = () => {
    return <div style={BottomBarStyle}>
        <img src={InstaImg} alt="Instagram" style={InstaBtnStyle} onClick={() => window.open('https://www.instagram.com/dishakhanted/?hl=en')}/>
    </div>;
}

export default BottomBar;