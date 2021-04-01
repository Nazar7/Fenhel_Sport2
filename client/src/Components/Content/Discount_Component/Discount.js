import React from 'react';
import s from './Discount_Style.scss'
import Form_Subscribe from '../../Forms/Form_Send'
import FormOpenBtn from '../../Forms/Form_Open_Btn'



const Discount = () => {

    return(

        <div className="discount">
		<div className="discountBlock container">
			<div className="discountBlock__text">
				ДЛЯ ПОСТІЙНИХ ТА ОПТОВИХ
				КЛІЄНТІВ ДІЄ СИСТЕМА ЗНИЖОК!
				</div>
				<div>
					
				 <FormOpenBtn /> 
				</div>

			

		</div>

	</div>

    
    )


}
export default Discount;