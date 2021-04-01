import React from 'react';
import s from './Subscribe_Style.scss'
import instagram from './img_subscribe/instagram.svg'


const Subscribe = () => {

    return(
  
  
		<div className="subscribe">
			<div className='container'>	
			<div className="subscribe__text">
				<p className="subscribe__title">підписуйтесь на нашу сторінку В instagram</p>
				<p className="subscribe__discount">та отримуйте 10% знижки на перше замовлення</p>
			</div>
		<div className="subscribe__instagram"><img src={instagram} alt=""></img></div>
		<button className="subscribe__button">Підписатись</button>
		</div>
		</div>
 

    
    )


}
export default Subscribe;