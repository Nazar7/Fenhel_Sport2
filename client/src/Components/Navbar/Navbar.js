import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import logo from './img/logo.png';
import nav_btn from './img/nav-mobile-logo.png'
import s from './Navbar_Style.scss';
import {NavLink, Router} from 'react-router-dom';
import Dropdown from './Dropdown.js';
import BtnSizeChart from '../Modal_Screen/BtnSizeChart'


const Navbar = () =>{



    return (
        
        <nav className="navbar navbar-expand-lg container-fluid hidden-md">
            <div className='container container__block'>
                <div className="nav__logo">
                   <img src={logo} alt=""></img> 
                </div>
                <div className="nav__menu ">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-item nav-link menu__link" activeClassName={s.active} to="/main">Головна</NavLink>
                            <NavLink className="nav-item nav-link menu__link" to="/sport-clothe">Спортивний одяг</NavLink>
                            <NavLink className="nav-item nav-link menu__link" to="/corporate-clothe">Корпоративний одяг</NavLink>
                            <NavLink className="nav-item nav-link menu__link" to="/payment-delivery">Оплата і доставка</NavLink>
                            <NavLink className="nav-item nav-link menu__link" to="/contacts">Контакти</NavLink>
                            <NavLink className="nav-item nav-link menu__link" to="/information">Важлива інформація</NavLink>
                        </div>
                    </div>
                </div>
                <div className='show'>
                < Dropdown />
                </div>
            </div>
        </nav>
      

    );
}

export default Navbar;