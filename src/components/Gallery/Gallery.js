
// External Libraries
import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';

// Internal Libraries
import './Gallery.css';
import 'react-image-lightbox/style.css';

let cssClassName = "Gallery";

class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            photoIndex: 0
        };
    }

    openLightBox = (index) => {
        this.setState({
            photoIndex: index,
            isOpen: true
        });
    }

    render() {

        let layout = [];
        let dummys = this.props.src;

        for (let i in this.props.thumbnails) {
            let Style = {};

            if (this.props.Style!=null) {
                Style = {...this.props.Style};
            }

            layout.push(<img 
                src={this.props.thumbnails[i]} 
                alt="Unavailable" 
                key={i} 
                className={cssClassName+'pic'} 
                border="0"
                onClick={() => this.openLightBox(i)}
                style={Style}
            />);
        }

        return <div className={cssClassName}>
            {this.state.isOpen && (
            <Lightbox
                imagePadding={50}
                mainSrc={dummys[this.state.photoIndex]}
                nextSrc={dummys[(this.state.photoIndex + 1) % dummys.length]}
                prevSrc={dummys[(this.state.photoIndex + dummys.length - 1) % dummys.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                this.setState({
                    photoIndex: (this.state.photoIndex + dummys.length - 1) % dummys.length,
                })
                }
                onMoveNextRequest={() =>
                this.setState({
                    photoIndex: (this.state.photoIndex + 1) % dummys.length,
                })
                }
            />
            )}
            <div style={{width: '100%', display: 'inline-block'}}>
                {layout}
            </div>
        </div>;

    }
}

export default Gallery;
