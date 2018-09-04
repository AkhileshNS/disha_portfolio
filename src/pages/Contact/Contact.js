
//External Libraries
import React, {Component} from 'react';

//Internal Libraries
import './Contact.css';
import '../../global.css';
import Section from '../../components/Section/Section';
import dummy from '../../assets/dummy_img.jpg';
import Form from '../../components/Form/Form';

let cssClassName = 'Contact';

class Contact extends Component {

    render() {
        return <div className={cssClassName}>
            <Section 
                title="Hi, I'm Disha"
                subtext={'asjba lsbdalk sdbajs bdaksj.bd\n\najsd ajsbdja sbdjkas bdkaj sbdkj asbdj asbdja sbdajk .sbdj lasbd asdas dasda sdasd'}
                icon={dummy}
            />
            <Form />
        </div>;
    }

}

export default Contact;