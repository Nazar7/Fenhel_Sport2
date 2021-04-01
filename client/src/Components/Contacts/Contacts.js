import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import s from './Contacts_Style.scss'
import location from './img/location.svg'
import phone from './img/phone.svg'
import mail from './img/mail.svg'
import instagram from './img/instagram.svg'
import Map from './Location'


const Contacts = () =>{
    return(
        <div className='contacts'>
            <div className='contacts__container'>
                    <p className='contacts__title'>НАШІ КОНТАКТИ</p>
                <div className='contacts__block mt-5'>
                    <div className='contacts__address'>
                        <img className='contact__logo' src={location} alt=""></img>
                        <p>м. Рівне,</p> 
                        <p>вул. Соборна, 2а</p>
                    </div>
                    <div className='contacts__address'>
                        <img className='contact__logo' src={phone} alt=""></img>
                        <p>+38 (097) 660 1934</p>
                        <p>+38 (097) 252 7779</p>
                    </div>
                    <div className='contacts__address'>
                        <img className='contact__logo' src={mail} alt=""></img>
                        <p>olegb34@gmail.com</p>
                    </div>
                    <div className=' contacts__address'>
                        <img className='contact__logo' src={instagram} alt=""></img>
                        <p>@fenhel_sport</p>
                        <p> @j_public_print</p>
                    </div>
                </div>
            </div>

            <Map
                id="myMap"
                options={{
                    center: { lat: 50.622940, lng: 26.229430 },
                    zoom: 14
                }}
                onMapLoad={map => {
                    var marker = new window.google.maps.Marker({
                        position: { lat: 50.622940, lng: 26.229430 },
                        map: map,
                      
                    });
                }}
            />  

        </div>
    )
}




export default Contacts;