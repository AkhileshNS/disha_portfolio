
// External Libraries
import React, {Component} from 'react';
import Radium from 'radium';
import {withRouter} from 'react-router-dom';

// Internal Libraries 
import './AppBar.css';

// Custom Import
let Link =  Radium(require('react-router-dom').Link);

let cssClassName = 'AppBar';

let LinkStyle = {
    fontSize: '1.6em',
    color: 'black',
    backgroundColor: '#F7F7F7',
    textDecoration: 'none',
    marginLeft: '8px',
    marginRight: '8px',
    fontWeight: 'bold',
    padding: '4px',
    borderRadius: '2px',
    ':hover': {
        backgroundColor: '#d3d3d3'
    },
    ':active': {
        backgroundColor: 'black',
        color: '#F7F7F7'
    }
};

class AppBar extends Component {

    render() {

        let links = [];

        for (let link of this.props.links) {
            let Style = {...LinkStyle};
            if (this.props.location.pathname===link.to) {
                Style.backgroundColor = 'black';
                Style.color = '#F7F7F7';
                Style[':hover'] = {...Style[':active']};
            }
            links.push(<Link to={link.to} key={link.to} style={Style}>{link.title}</Link>);
        }

        return (
            <div className={cssClassName}>
                <p className={cssClassName+'p'}>- DISHA KHANTED -</p>
                {links}
            </div>
        );
    }
}

export default withRouter(AppBar);