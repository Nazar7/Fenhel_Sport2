import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {Component} from 'react';
import state from '../../redux/state'
import BtnSizeChart from '../Modal_Screen/BtnSizeChart'
import s from './Clothes_Style.scss'
import ModalScreen from '../Modal_Screen/ModalScreen'
import { BrowserRouter as Router, Route } from "react-router-dom";



const ClotheTitle = (props) => {
    // console.log(props)
    return (
    <div className="row container__row">
        <div className="col-lg-8 col-md-12 col-sm-12 clothes__bar">
            <p className="clothe__title">{props.title}</p>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 clothes__bar">
           <BtnSizeChart url={props.url}/>
        </div>      
    </div>
    );
}

const Clothe = (props) => {
    // console.log({match})
    let src_sportClothe = state.sportClothesImg.map(d =>  <img className="gallery__items" src={d.src} key={d.id} alt="sport_Clothes_Img" />);
    let src_corporateClothe = state.corporateClotheImg.map(d =>  <img className="gallery__items" src={d.src} key={d.id} alt="corporate_Clothes_Img" />);   
        if (props.url == "sport-clothe")
         {
    return(

        <div className="clothes">
            <div className="clothes__container">
                <ClotheTitle title={props.title}  url={props.url}/>
                <div className="gallery__list">
                    {src_sportClothe}
                </div>
            </div>
            {/* <Route path="/sport-clothe" 
           render={ () => 
              <ModalScreen name={props.url}/>}
           /> */}
        </div>
    )
}
return(
    <div className="clothes">
        <div className="clothes__container">
            <ClotheTitle title={props.title} url={props.url}/>
                <div className="gallery__list">
                    {src_corporateClothe}
            </div>
        </div>
        {/* <Route path="/corporate-clothe" 
           render={ () => 
              <ModalScreen name={props.url}/>}
           /> */}
    </div>
)
}

export default Clothe;