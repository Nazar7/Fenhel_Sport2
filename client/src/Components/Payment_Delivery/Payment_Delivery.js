import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import s from './Payment_Delivery_Style.scss'


const Payment_Delivery = () =>{
    return(

        <div className='del__pay'>
            <div className='del__pay__container'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='del__pay__rules'>
                        <p className='del__pay__title'>ОПЛАТА І ДОСТАВКА</p>
                        <p className='del__pay__text'>Після оформлення замовлення ми зв’яжемося з Вами 
                            для уточнення та вибору способу оплати та доставки.</p>
                        </div>
                        <div className='del__pay__rules'>
                        <p className='del__pay__title'>ОПЛАТА ЗАМОВЛЕННЯ</p>
                        <p className='del__pay__text'>Пропонуємо Вам наступні 
                            способи оплати замовленого Вами товару:</p>
                            <ul>
                                <li><span>{'\u2714'}</span>безготівковий розрахунок згідно виставленому рахунку;</li>
                                <li><span>{'\u2714'}</span>оплата банківською карткою або готівкою в офісі компанії;</li>
                                <li><span>{'\u2714'}</span>післяплата у відділенні «Нової пошти» при отриманні товару.</li>
                            </ul>
                        </div>
                        <div className='del__pay__rules'>
                        <p className='del__pay__title'>доставка товару</p>
                        <p className='del__pay__text'>Пропонуємо Вам наступні способи 
                            доставки замовленого Вами товару:</p>
                        <p className='mt-5'>ДОСТАВКА ПО УКРАЇНІ КУР'ЄРСЬКОЮ СЛУЖБОЮ.<br></br> Основним партнером для нас є 
                            кур'єрська служба "Нова Пошта".<br></br> Представництва цієї компанії відкриті в 
                            сотнях населених пунктів України:<br></br>
                            <div className='mt-4'>
                                <a target = 'new' href="http://novaposhta.ua/frontend/brunchoffices/ua">http://novaposhta.ua/frontend/brunchoffices/ua</a><br></br>
                            Зверніть увагу, якщо у Вашому місті діє декілька відділень - вкажіть на якому з них 
                            Вам буде зручніше забрати Ваше замовлення.<br></br>
                             Звертаємо Вашу увагу на той факт, що товар 
                            може знаходиться безкоштовно на складі "Нової Пошти" тільки перші 5 діб з моменту його 
                            прибуття в місто призначення.</div></p>
                            <p className='mt-5'>Для Вашої зручності ми також можемо відправити замовлення такими кур'єрськими службами:</p>
                            <ul className='mt-5'>
                                <li><span>{'\u2714'}</span>Укрпошта</li> 
                                <li><span>{'\u2714'}</span>Автолюкс</li>
                                <li><span>{'\u2714'}</span>Інтайм</li>
                                <li><span>{'\u2714'}</span>Делівері</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Payment_Delivery;