
//External Libraries
import React, {Component} from 'react';

//Internal Libraries
import '../../global.css';
import './Home.css';
import HomeBg from '../../assets/Home_Bg.png';
import Section from '../../components/Section/Section';

let cssClassName = 'Home';

let lorem_ipsom = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n\n sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

class Home extends Component {

    log = () => {
        console.log('Button Clicked!');
    }

    render() {

        return <div className={cssClassName}>
            <img src={HomeBg} alt="Home Page" className={cssClassName + 'img'}/>
            <Section
                title="Shirt Flirt" 
                subtext={lorem_ipsom} 
                images={[HomeBg, HomeBg, HomeBg, HomeBg, HomeBg, HomeBg]}
                button="More"
                click={() => this.log()}
            />
            <Section
                title="Portfolio"
                images={[HomeBg, HomeBg, HomeBg, HomeBg, HomeBg, HomeBg, HomeBg, HomeBg, HomeBg]}
                darken={true}
            />
            <Section
                title="About Me"
                subtext={lorem_ipsom}
            />
            <Section
                title="Clients"
                images={[HomeBg, HomeBg, HomeBg]}
                darken={true}
            />
        </div>;

    }

}

export default Home;