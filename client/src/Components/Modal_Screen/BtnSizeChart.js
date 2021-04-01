import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {useState} from 'react';
import s from './BtnSizeChart_Style.scss'
import {NavLink, Redirect} from 'react-router-dom';
import ModalScreen from './ModalScreen'




const BtnSizeChart = (props) => {

    const [modalShow, setModalShow] = useState(false);
    if (props.show == "false") return <Redirect to={"/" + props.url} />;
    if (props.url == "sport-clothe") {

        return (
            <>
                <NavLink className='btn__primary' variant="primary" onClick={() => setModalShow(true)} to={"/" + props.url + "/" + "size-chart"}>
                    РОЗМІРНА СІТКА
                </NavLink>
                <ModalScreen
                    name={props.url}
                    show={modalShow}
                    onHide={() => setModalShow(false)
                    }
                />
            </>
        )
    } else {
        return (
            <>
                <NavLink className='btn__primary' variant="primary" onClick={() => setModalShow(true)} to={"/" + props.url + "/" + "size-chart"}>
                    РОЗМІРНА СІТКА
                    </NavLink>

                <ModalScreen
                    name={props.url}
                    show={modalShow}
                    onHide={() =>
                        setModalShow(false)
                    }
                />
            </>

        )
    }
}


export default BtnSizeChart;

