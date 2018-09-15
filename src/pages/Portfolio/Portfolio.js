
//External Libraries
import React, {Component} from 'react';

//Internal Libraries
import './Portfolio.css';
import '../../global.css';
import Category from '../../components/Category/Category';
import Config from '../../Config';

let lorem_ipsom = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n\n sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
let reversed = [false,true,false];

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    loadCategory = (category) => {
        this.props.history.push("/portfolio/"+category);
    }

    render() {

        if (this.state.width <= 768) {
            for (let i in reversed) {
                reversed[i] = true;
            }
        } else {
            for (let i in reversed) {
                if (i%2===0){
                    reversed[i] = false;
                } else {
                    reversed[i] = true;
                }
            }
        }

        return <div style={{width: '100%'}}>
            <Category 
                title="Category Title"
                subtext={lorem_ipsom}
                button="See More"
                click={() => this.loadCategory('main')}
                image={Config.category.thumbnails[0]}
                reverse={reversed[0]}
                width={this.state.width}
            />
            <Category 
                title="Category Title"
                subtext={lorem_ipsom}
                button="See More"
                click={() => this.loadCategory('black_and_white')}
                image={Config.category.thumbnails[1]}
                reverse={reversed[1]}
                darken={true}
                width={this.state.width}                
            />
            <Category 
                title="Category Title"
                subtext={lorem_ipsom}
                button="See More"
                click={() => this.loadCategory('brandcampaign')}
                image={Config.category.thumbnails[2]}
                reverse={reversed[2]}
                width={this.state.width}
            />
        </div>;
    }

}

export default Portfolio;