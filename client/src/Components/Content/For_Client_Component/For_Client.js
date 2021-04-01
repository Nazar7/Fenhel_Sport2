import React from 'react';
import s from './For_Client_Style.scss'
import watch from './img_for_client/Watch.svg';
import tshirt from './img_for_client/Tshirt.svg';
import dollar from './img_for_client/Dollar.svg';
import star from './img_for_client/Star.svg';
import FormOpenBtn from '../../Forms/Form_Open_Btn'

const For_Client = () => {

    return(
  
        <div className="description__forclient container">
            <p className="forclient__title">Чому вигідно бути нашим клієнтом?</p>
            <ul className="forclient__list">
                <li className="forclient__item"><img src={watch} alt=""></img>Консультація та швидка обробка замовлень, помірні ціни та швидка доставка товару. </li>
                <li className="forclient__item"><img src={tshirt} alt=""></img>Серед наших пропозицій є як моделі бюджетної лінійки, так і сучасні моделі преміум-сегменту.</li>
                <li className="forclient__item"><img src={dollar} alt=""></img>У нас Ви зможете купити футболки гуртом і в роздріб по найкращих цінах!</li>
                <li className="forclient__item"><img src={star} alt=""></img>Fenhel_shop першочергово турбується про комфорт та імідж свої клієнтів, пропонуючи для них якісний одяг.</li>
            </ul>
        </div>
    
    )


}
export default For_Client;