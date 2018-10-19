
//External Libraries
import React, {Component} from 'react';

//Internal Libraries
import '../../global.css';
import './Home.css';
import HomeBg from '../../assets/Home_Bg.png';
import Section from '../../components/Section/Section';
import config from '../../Config';

let cssClassName = 'Home';

let lorem_ipsom = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n\n sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

class Home extends Component {

    pushPage = url => {
        this.props.history.push(url);
    }

    render() {

        return <div className={cssClassName}>
            <img src={HomeBg} alt="Home Page" className={cssClassName + 'img'}/>
            <Section
                title="#ShirtFlirtByDishaKhanted"
                images={config.shirtflirtdemo}
                button="See More"
                click={() => this.pushPage('/portfolio/shirtflirt')}
            />
            <Section
                title="Portfolio"
                images={config.portfoliodemo}
                darken={true}
                button="See More"
                click={() => this.pushPage('/portfolio/main')}
            />
            <Section
                title="Black and White Gallery"
                images={config.portraits}
                button="See More"
                click={() => this.pushPage('/portfolio/black_and_white')}
            />
        </div>;

    }

}

export default Home;