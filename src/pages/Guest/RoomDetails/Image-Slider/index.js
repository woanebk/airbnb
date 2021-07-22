import React from 'react'
import Flickity from 'react-flickity-component'
import './flickity.css'

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const ImageUrls = [
  './images/slide_5.jpg',
  './images/slide_4.jpg',
  './images/slide_1.jpg',
  './images/slide_2.jpg',
  './images/slide_3.jpg'
]

const flickityOptions = {
  initialIndex: 2
}

// function Carousel() {
//   const [isOpen, setIsOpen] = useState(false);
//   //const [currentImageIndex, setCurrentImageIndex] = useState(flickityOptions.initialIndex);

//   return (<>
//     <Flickity
//       className={'carousel'} // default ''
//       elementType={'div'} // default 'div'
//       options={flickityOptions} // takes flickity options {}
//       disableImagesLoaded={false} // default false
//       reloadOnUpdate // default false
//       static // default false
//     >
//       {ImageUrls.map((item, index) => (
//         <div className="img-container" key={index}>
//           <img className="img" src={require(`${item}`).default} />
//         </div>
//       ))}
//     </Flickity>
//     {/* {
//       isOpen && (<Lightbox
//         mainSrc={ ImageUrls[] }
//       />)
//     } */}
//   </>)
// }

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      imgIndex: flickityOptions.initialIndex,
      LightBox_imgIndex: flickityOptions.initialIndex
    }
  }

  componentDidMount = () => {
    this.flkty.on('settle', () => {
      this.setState({imgIndex:this.flkty.selectedIndex})
      //console.log(`current index is ${this.flkty.selectedIndex}`)
    })
  }

  render() {
    return (<>
      <Flickity
        className={'carousel'} // default ''
        elementType={'div'} // default 'div'
        options={{
          initialIndex: this.state.imgIndex
        }} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
        flickityRef={c => this.flkty = c}
      >
        {ImageUrls.map((item, index) => (
          <div className="img-container" key={index} onDoubleClick={()=>{this.setState({isOpen: true, LightBox_imgIndex: index})}}>
            <img className="img" src={require(`${item}`).default} />
          </div>
        ))}
      </Flickity>
      {
        this.state.isOpen && (<Lightbox
          mainSrc={require(`${ImageUrls[this.state.LightBox_imgIndex]}`).default}
          nextSrc={require(`${ImageUrls[(this.state.LightBox_imgIndex + 1) % ImageUrls.length]}`).default}
          prevSrc={require(`${ImageUrls[(this.state.LightBox_imgIndex + ImageUrls.length - 1) % ImageUrls.length]}`).default}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              LightBox_imgIndex: (this.state.LightBox_imgIndex + ImageUrls.length - 1) % ImageUrls.length
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              LightBox_imgIndex: (this.state.LightBox_imgIndex + 1) % ImageUrls.length
            })
          }
        />)
      }
    </>)
  }
}

export default Carousel;