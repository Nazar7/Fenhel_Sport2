import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {useState} from 'react';
// import logo_footer from './img_footer/logo_footer.png';
import girl from './img_main_content/girl3.png';
import s from './Main_Style.scss';
import SimpleSlider from '../../Components/Slider/Slider';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Form_Subscribe from '../Forms/Form_Send'
import FormOpenBtn from '../Forms/Form_Open_Btn'
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs_Component/AboutUs';
import For_Client from './For_Client_Component/For_Client';
import Subscribe from './Subscribe_Component/Subscribe';
import Our_Works from './Our_Works/Our_Works';
import StepForOrder from './StepsForOrder_Component/StepsForOrder';
import Discount from './Discount_Component/Discount';
import Form_Submit from '../../Components/Forms/Form_Submit'
import {Route, BrowserRouter} from 'react-router-dom';
import Form_Sub from '../Forms/Form_Submit'
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";


const Main_Content = () => {
    
    return (
        <div className="Main_Content">
            <div className="content">
                <div className="content__container">
                        <div className=" girl__block">
                            <img className="girl" src={girl} alt=""></img>
                        </div>
                            <div className="column__content">
                                <div className='price'>
                                <p className="content__title">ДРУК НА ФУТБОЛКАХ</p>
                                {/* <div className='btnForm'> */}
                                <p className="content__price">ВІД 199 ГРН</p>
                                </div>
                                <div className="btn__submit__main">
                                <FormOpenBtn />
                                </div>
                                {/* <Route exect path="/order_form" component={Form_Submit} /> */}
                                <Form_Subscribe exect path="main/order-form"/>
                                {/* <Route exect path="/information" component={Info} /> */}
                                {/* </div> */}
                               

                            </div>
                </div>
            </div>
            <AboutUs />
            <Form_Sub/>
            <For_Client />
            <Subscribe />
            <Our_Works />
            <StepForOrder />
            <Discount />
          

{/* 

            </div> */}

            {/* <SimpleSlider /> */}

        </div>
    
    );
    
}

export default Main_Content;