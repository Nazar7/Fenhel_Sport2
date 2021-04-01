import React, {Component} from 'react';
import state from '../../../redux/state';
import s from './Our_Works_Style.scss';
import Modal_Img from './Modal_Img';





class Our_Works extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imgUrl: '',
        };
      }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

    var handlePopup = (src) => {
        this.setState({
            imgUrl: src 
        })
    }

   var src_ourWorksClothe = state.ourWorks.map(w => <img className="btn btn-primary gallery__item" data-toggle="modal" data-target=".bd-example-modal-xl" src={w.src} key={w.id} onClick={(src)=>handlePopup(w.src)}  alt="works_Clothes_Img" />);
    


    return(
  
        <div className="our__works">
		<div className="gallery__container">
			<p className="gallery__title">НАШІ РОБОТИ</p>
            {this.num}
			<div className="gallery__list">
                {src_ourWorksClothe}
			</div>	
		</div>
        <Modal_Img img={this.state.imgUrl}/>
	</div>
    
    )
    }
}
export default Our_Works;