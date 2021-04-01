import React from 'react';
import s from './AboutUs.scss'
import aboutus_img from './img_aboutus/img_about_us.jpg';

const AboutUs = () => {

    return(
  
        <div className="description">
            <div className="description__container">
            <div className="description__abotus">
                <div className="description__text">
                    <div className="description__text1">
                        <p className="description__title">ПРО НАС</p>
                        <p className="description__products"><strong>Fenhel Shop.</strong> <br></br>Корпоративний одяг для компаній будь якого виду діяльності, а також спортивний одяг.</p> <br></br><p class="description__products"> Працюємо за такими напрямками:</p>
                            <p className="description__products"><strong>Корпоративний одяг - </strong>нанесення логотипу компанії на одяг (футболку, спецодяг, світшоти, светри, реглани, флісові кофти або жилетки). </p> <br></br>
                                <p className="description__products"><strong> Одяг для спортивних команд -</strong> тренувальні футболки, ігрова форма, поло, світшоти, реглани, безрукавки. Наносимо логотип команди, прізвище, ініціали.</p> <br></br>
                                    <p className="description__products"><strong>Індивідуальні замовлення - </strong>будь який напис на будь якому одязі! </p> <br></br>
				    </div>
                                    <div className="description__text2">
                                        <p className="description__products"><strong>Нанесення зображення на:</strong></p>
                                        <div className="description__clothes">
                                            {/* <!-- <div class="description__clothes__list"> --> */}
                                            <ul className="clothes__lists">
                                                <li className="clothes__items">футболки</li>
                                                <li className="clothes__items">футболки поло</li>
                                                <li className="clothes__items">светри, реглани</li>
                                            </ul>
                                            <ul className="clothes__lists">
                                                <li className="clothes__items">флісові куртки</li>
                                                <li className="clothes__items">штани, шорти</li>
                                                <li className="clothes__items">кепки</li>
                                            </ul>
                                            <ul className="clothes__lists">
                                                <li className="clothes__items">безрукавки</li>
                                                <li className="clothes__items">спортивні костюми</li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                <div className="description__photo">
                                    <img className="description__img" src={aboutus_img} alt=""></img>
				</div>
                                </div>
                                <p className="description__products"><strong>Для постійних та оптових клієнтів діє система знижок</strong></p>
                            </div>
            </div>
    
    )


}
export default AboutUs;