
// External Libraries
import React, {Component} from 'react';

// Internal Libraries
import '../../global.css';
import './Form.css';

let cssClassName = 'Form';

class Form extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            name: "",
            email: "",
            message: ""
        };
    }

    changeValue = (name,e) => {
        this.setState({
            [name]: e.target.value
        });
    }

    contactMe = () => {
        // Contact Me Button was Pressed
    }

    render() {

        return <div className={cssClassName}>
            <p className={cssClassName+'title'}>Lets Work Together</p>
            <input 
                className={cssClassName+'input'} 
                placeholder="Name" 
                value={this.state.name}
                onChange={e => this.changeValue('name',e)}
            />
            <input 
                className={cssClassName+'input'} 
                placeholder="Email" 
                value={this.state.email}
                onChange={e => this.changeValue('email',e)}
            /><br />
            <textarea 
                className={cssClassName+'textarea'} 
                placeholder="Message" 
                value={this.state.message}
                rows="4"
                onChange={e => this.changeValue('message',e)}
            /><br />
            <button className='button' onClick={this.contactMe}>Contact Me</button>
        </div>
    }

}

export default Form;