
// External Libraries
import React, {Component} from 'react';
import Lightbox from 'react-image-lightbox';
import windowSize from 'react-window-size';

// Internal Libraries
import 'react-image-lightbox/style.css';
import './Gallery.css';

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

        let check = 5;
        let mw = "20%";

        if (this.props.windowWidth<=768 || this.props.fromSection) {
            check = 3;
            mw = "33.33%";
        }

        let j = 0;

        for (let i=0;i<check;i++) {
            layout.push([]);
        }

        for (let i in this.props.thumbnails) {
            let Style = {};

            if (this.props.Style!=null) {
                Style = {...this.props.Style};
            }

            if (j===check) {
                j = 0;
            }

            layout[j++].push(<img 
                src={this.props.thumbnails[i]} 
                alt="Unavailable" 
                key={i} 
                className={cssClassName+'pic'} 
                border="0"
                onClick={() => this.openLightBox(i)}
                style={Style}
            />);
        }

        console.log(layout.length);

        let gallery = [];

        for (let i in layout) {
            gallery.push(<div key={i} style={{maxWidth: mw}} className={cssClassName+'column'}>
                {layout[i]}
            </div>);
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
            {gallery}
        </div>;

    }
}

export default windowSize(Gallery);
