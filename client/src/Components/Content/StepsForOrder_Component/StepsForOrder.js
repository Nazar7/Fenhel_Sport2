import React from 'react';
import s from './StepsForOrder_Style.scss'
import handsImg from './img_stepsForOrder/Hands.png'
import phoneImg from './img_stepsForOrder/Phone.svg'
import computerImg from './img_stepsForOrder/Computer.svg'
import moneyImg from './img_stepsForOrder/Money.svg'
import keyImg from './img_stepsForOrder/Key.svg'
import discetImg from './img_stepsForOrder/Discet.svg'

const StepForOrder = () => {

    return(
  
        <div className="stepsForOrder">
		<div className="orderInstruction container">
			<p className="orderInstruction__title">КРОКИ ДЛЯ УСПІШНОГО ЗАМОВЛЕННЯ</p>
			<ul className="orderInstruction__list">
				<li className="orderInstruction__item">
					<img src={handsImg} alt=""></img>
					<p className="orderInstruction__itemTitle">Заявка</p>
					<p className="orderInstruction__itemText">Заповніть заявку, відправте її на наш сайт, а ми передзвонимо Вам протягом 10 хвилин.</p>
				</li>
				<li className="orderInstruction__item">
					<img src={phoneImg} alt=""></img>
					<p className="orderInstruction__itemTitle">Консультація</p>
					<p className="orderInstruction__itemText">Наш менеджер зв’язується з Вами, консультує по всіх питаннях.</p>
				</li>
				<li className="orderInstruction__item">
					<img src={computerImg} alt=""></img>
					<p className="orderInstruction__itemTitle">Макет</p>
					<p className="orderInstruction__itemText">Ми робимо макет Вашого замовлення
та відправляємо Вам.</p>
				</li>
				<li className="orderInstruction__item">
					<img src={moneyImg} alt=""></img>
					<p className="orderInstruction__itemTitle">Оплата</p>
					<p className="orderInstruction__itemText">Після затвердження макету Ви здійснюєте оплату в будь-який зручний Вам спосіб.</p>
				</li>
				<li className="orderInstruction__item">
					<img src={keyImg} alt=""></img>
					<p className="orderInstruction__itemTitle">Виготовлення</p>
					<p className="orderInstruction__itemText">Ми розпочинаємо виготовлення
Вашого замовлення.</p>
				</li>
				<li className="orderInstruction__item">
					<img src={discetImg} alt=""></img>
					<p className="orderInstruction__itemTitle">Доставка</p>
					<p className="orderInstruction__itemText">Після перевірки та упакування, ми відправляємо Ваше замовлення.</p>
				</li>
			</ul>
		</div>
	</div>

    
    )


}
export default StepForOrder;