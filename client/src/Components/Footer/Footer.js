import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import logo_footer from './img_footer/footer_logo.png';
import instagram__small from './img_footer/instagram__small.svg';
import facebook__small from './img_footer/facebook__small.svg';
import location_small from './img_footer/location_small.svg';
import mail_small from './img_footer/mail_small.svg';
import phone_small from './img_footer/phone_small.svg';
import st from './Footer_Style.scss';


const Footer = () =>{
    return (
		<div className="footer">
			<div className='footer__container'>
				<div className='footer__logo'>
					<img className="footer__logo__img" src={logo_footer} alt=""></img>
				</div>
				<div class="footer__social">
					<a href='https://www.instagram.com/fenhel_sport/' target="_blank"><img src={instagram__small} alt=""></img></a>
					<a href='https://www.facebook.com/groups/fenhelsport/' target="_blank"><img src={facebook__small} alt=""></img></a>
				</div>
				<div class="footer__address">
				<div class="footer__address__street">
					<img className="mr-3" src={location_small} alt=""></img>
					<div class="footer__text">м. Рівне, вул. Соборна, 2а</div>
				</div>
				<div class="footer__address__mail">
					<img className="mr-3" src={location_small} alt=""></img>
					<div class="footer__text">olegb34@gmail.com</div>
				</div>
				</div>
				<div class="footer__address">
				<div class="footer__address__street">
				<img className="mr-3" src={phone_small} alt=""></img>
					<div class="footer__text"><a href="tel:+380976601934">+38 (097) 660 19 34</a></div>
				</div>
				<div class="footer__address__mail">
				<img className="mr-3" src={phone_small} alt=""></img>
					<div class="footer__text"><a href="tel:++380972527779">+38 (097) 252 77 79</a></div>
				</div>
				</div>
			</div>





			{/* <div className="row footer">
				<div className="col-lg-3 footer__logo">
					<img className="footer__logo__img" src={logo_footer} alt=""></img>
				</div>
				<div className="col-lg-1 footer__social__inst">
				<a href='https://www.instagram.com/fenhel_sport/' target="_blank"><img src={instagram__small} alt=""></img></a>
				</div>
				<div className="col-lg-1 footer__social__face">
				<a href='https://www.facebook.com/groups/fenhelsport/' target="_blank"><img src={facebook__small} alt=""></img></a>
				</div>
				<div className="col-lg-3 footer__location">
					<div className="row row__contact">
						<img src={location_small} alt="" className='mr-4'></img>
						<p className="footer__text">м. Рівне, вул. Соборна, 2а</p>
					</div>
					<div className="row row__contact">
						<img src={mail_small} alt="" className='mr-3'></img>
						<p className="footer__text">olegb34@gmail.com</p>
					</div>
				</div>
				<div className="col-lg-3 footer__phone">
					<div className="row row__contact">
						<img src={phone_small} alt="" className='mr-3'></img>
						<p className="footer__text">+38 (097) 660 19 34</p>
					</div>
					<div className="row row__contact">
						<img src={phone_small}alt="" className='mr-3'></img>
						<p className="footer__text">+38 (097) 252 77 79</p>
					</div>
				</div>
			</div> */}
		</div>

    );
}

export default Footer;