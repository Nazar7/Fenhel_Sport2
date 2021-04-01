import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import s from './Info_Style.scss';

const Info = () => {
    return(

        <div className='info mt-5 mb-5 ml-4'>
            <div className='info__container'>
                <div className='row'>
                    <div className='col-lg-12 col-sm-12'>
                        <p className='info__title'>Важлива інформація при розміщенні замовлення</p>
                        <p>Для швидкої обробки замовлення нам важлива наступна інформація:</p>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-12 col-sm-12'>
                        <ul>
                            <li><span>{'\u2714'}</span>кількість замовлення;</li>
                            <li><span>{'\u2714'}</span>розмір друку;</li>
                            <li><span>{'\u2714'}</span>колір друку (бажано вказати номер кольору з палітри Pantone TPX);</li>
                            <li><span>{'\u2714'}</span>колір і склад тканини;</li>
                            <li><span>{'\u2714'}</span>бажаний термін виготовлення замовлення.</li>
                        </ul>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-12 col-sm-12'>
                        <p className='info__title'>Вимоги до файлів</p>
                        <ul>
                            <li>- для векторних зображень формати файлів: 
                                EPS, AI (Adobe Illustrator (будь-якої версії)), 
                                CDR (Corel Draw (будь-якої версії)). 
                                Шрифти повинні бути перетворені в криві або прикріплені файли шрифтів. </li>
                            <li className='mt-4'>- для растрових зображень формати файлів: 
                                TIFF, JPEG. Мінімальна роздільна здатність 200 dpi, 
                                розмір зображення 1:1.</li>
                        </ul>
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-lg-12 col-sm-12'>
                        <p className='info__text'>Якщо Ви не розумієте, про що йде мова, 
                            просто надішліть нам електронною поштою те, 
                            що у Вас є - а ми вже розберемося, що з цим робити! 
                            Якщо у Вас немає малюнка, 
                            а лише ідеї про те, що Ви хочете бачити на своїх виробах - доручіть нам 
                            розробити малюнок за додаткову плату. 
                            Напишіть або розкажіть нам Ваші побажання, 
                            і ми зробимо все можливе, щоб швидко втілити Ваше бачення в життя! 
                            Ми також зобов’язуємося не використовувати надіслані 
                            Вами фотографії і зображення в комерційних цілях без Вашого дозволу.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Info