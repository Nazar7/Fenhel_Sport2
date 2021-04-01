import React, {Component} from 'react';
import s from './Modal_Img_Style.scss'

class Modal_Img extends React.Component {

    render(){
    console.log(this.props.img)


    return (

        <div className="modal fade bd-example-modal-xl modal__fade__img" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm .modal-lg modal-xl mt-5 ">
        <div class="modal-content modal__img">
            <div className='modal__size '>
                <div className="popap__img">
                    <img className='img' src={this.props.img} />
                </div>
                <button type="button" className="close close__btn" data-dismiss="modal" aria-label="Close">
                    <span className='close__btn' aria-hidden="true">&times;</span>
                </button>

            </div>
            </div>
        </div>
    </div>
    )
    }
}

export default Modal_Img