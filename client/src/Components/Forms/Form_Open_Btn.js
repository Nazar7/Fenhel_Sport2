
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {useState} from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import s from './Form_Open_Btn_Style.scss'
// import Form_Submit from './Form_Submit'
import Form_Send from './Form_Send'
import ModalScreenForm from './Form_Send'


const FormOpenBtn = (props)=>{

    const [modalShow, setModalShow] = useState(false);

    return(
        <>
        <NavLink className="btn button__submit"  variant="primary" onClick={() => setModalShow(true)} to={"/" + "main" + "/" + "order-form"}>
        Оформити замовлення
        </NavLink>
        <ModalScreenForm
                    name={props.url}
                    show={modalShow}
                    onHide={() => setModalShow(false)
                    }
                />
    </>
        // <Link to="/signup" type="button" className="btn button__submit content__button" data-toggle="modal" data-target="#exampleModal">
        //     Оформити замовлення
        // </Link>
        

    )
}

export default FormOpenBtn;




