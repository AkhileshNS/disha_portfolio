
//External Libraries
import React, {Component} from 'react';

//Internal Libraries
import '../../global.css';
import './Home.css';
import HomeBg from '../../assets/Home_Bg.png';
import Section from '../../components/Section/Section';
import config, {texts} from '../../Config';

let cssClassName = 'Home';

class Home extends Component {

    pushPage = url => {
        this.props.history.push(url);
    }

    render() {

        return <div className={cssClassName}>
            <img src={HomeBg} alt="Home Page" className={cssClassName + 'img'}/>
            <Section
                title={texts.Home.titles[0]}
                images={config.shirtflirtdemo}
                button="See More"
                click={() => this.pushPage('/portfolio/shirtflirt')}
            />
            <Section
                title={texts.Home.titles[1]}
                images={config.portfoliodemo}
                darken={true}
                button="See More"
                click={() => this.pushPage('/portfolio/main')}
            />
            <Section
                title={texts.Home.titles[2]}
                images={config.portraits}
                button="See More"
                click={() => this.pushPage('/portfolio/black_and_white')}
            />
        </div>;

    }

}

export default Home;