import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {NavLink} from 'react-router-dom';
import logo from './img/logo.png';
import s from './Dropdown_Style.scss';
import mobile_nav from './img/nav-mobile-logo.png'
import mobile_nav_active from './img/nav-logo-active.png'

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false };
    }

    toggleState() {
        this.setState({ 
            isOpened: !this.state.isOpened
         });

      }

  render() {
    let dropdownText;
      if (this.state.isOpened) {
          dropdownText = 
            <div class="dropdawn-menu">
                <div className='logo__title'>
                    <img className='mt-4 mb-4 logo__nav'  src={logo} alt=""></img> 
                </div>
            <NavLink className="nav-item nav-link menu__link" activeClassName={s.active} to="/main">Головна</NavLink>
            <NavLink className="nav-item nav-link menu__link" to="/sport-clothe">Спортивний одяг</NavLink>
            <NavLink className="nav-item nav-link menu__link" to="/corporate-clothe">Корпоративний одяг</NavLink>
            <NavLink className="nav-item nav-link menu__link" to="/payment-delivery">Оплата і доставка</NavLink>
            <NavLink className="nav-item nav-link menu__link" to="/contacts">Контакти</NavLink>
            <NavLink className="nav-item nav-link menu__link" to="/information">Важлива інформація</NavLink>
            </div> 
      }
      return (
          <div className='logo__title' onClick={this.toggleState.bind(this)}>
              <img className='mr-4' src={mobile_nav} alt=""></img>
            {dropdownText}
          </div>
      );
  }
}

export default Dropdown;