import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {Component} from 'react';
import state from '../../redux/state'
import s from './ModalScreen_Style.scss'




const Size_Example = (props) => {
    let sizeColor = props.clothes.map(c => 
        <p className="size__type__number" style={{background: c.bgcolor, color: c.color, border:c.border}} >{c.size}</p>);
    let sizeChart = props.size.map(b => 
        <div className="col__size" style={{fontWeight: b.weight, textTransform: b.text}} >{b.size}</div>);
    let sorce = props.img.map(i =>
            <img class="img__tshirt" src={i.src} alt=""></img>);
    return (
        <div class="row man__tshirt__row">
            <div class="col-lg-6 col-md-12 col-sm-12 img__size__block">
                {sorce}
                {/* <div class="size__type__title"> */}
                    <p class="man__tshirt">ФУТБОЛКА ЧОЛОВІЧА</p>
                    <div class="size__type man__tshirt__col">
                        {sizeColor}
                    {/* </div> */}
                </div>
            </div>
            <div class="col-lg-5 col-md-12 col-12 size__chart">
                <div class="size__chart__block">
                    <div class="row sizes">
                        {sizeChart}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Size_Example;