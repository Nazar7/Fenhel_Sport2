import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import img1 from '../Content/img_main_content/img_main_works1.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import s from './Slider_Style.scss'
import state from '../../redux/state'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Our_Works from '../Content/Our_Works/Our_Works'

// class DemoCarousel extends Component {
//     render() {

//         let src_slidePhoto = state.sliderPhoto.map(s =>  
//             <div className='slider__items'><img className='slider__img' src={s.src} key={s.id} 
//         alt="slider_photo" /></div>);
//         console.log(src_slidePhoto)
//         // console.log(src_slidePhoto)

//         return (
//             <div className="slider-container">
//             <Carousel className='slider' showArrows={true} height='649px' width='642px'>
//                  {src_slidePhoto}
//                 {/* <img className="gallery__items" src={img1}
//                     alt="slider_photo" /> */}
            
//                     {/* {src_slidePhoto} */}
//                     {/* <p className="legend">Legend 3</p> */}
//             </Carousel>
//             </div>
//         );
//     }
// }


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    console.log(this.props)

          let src_slidePhoto = state.sliderPhoto.map(s =>  
        <img className='slider__img' src={s.src} key={s.id} 
    alt="slider_photo" />);
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            {src_slidePhoto[this.id]}
          </div>
          <div>
            {src_slidePhoto[1]}
          </div>
          <div>
            {src_slidePhoto[2]}
          </div>
          <div>
            {src_slidePhoto[3]}
          </div>
          <div>
            {src_slidePhoto[4]}
          </div>
          <div>
            {src_slidePhoto[0]}
          </div>
        </Slider>
      </div>
    );
  }
}





// class Slide extends Component {
//     render() {
//       const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1

//       };

    //   let src_slidePhoto = state.sliderPhoto.map(s =>  
    //     <div className='slider__items'><img className='slider__img' src={s.src} key={s.id} 
    // alt="slider_photo" /></div>);

      // return (
      //   <div>
      //     <h2> Single Item</h2>
      //     <Slider {...settings}>
      //     <div>
      //       <h3>1</h3>
      //     </div>
      //     <div>
      //       <h3>2</h3>
      //     </div>
      //     <div>
      //       <h3>3</h3>
      //     </div>

           
          
  //       </div>
  //     );
  //   }
  // }


// export default Slide;