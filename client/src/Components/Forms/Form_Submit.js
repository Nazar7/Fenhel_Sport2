import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {Component, createContext} from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { Redirect} from 'react-router-dom';
import state from '../../redux/state'
import s from './Form_Submit_Style.scss'
import axios from 'axios'
import Form_Send from './Form_Send'
import {Route, BrowserRouter} from 'react-router-dom';
import smile from './Smile.png'


    class Form_Sub extends Component {

  constructor(props) {
    super(props)
    this.state ={
      show : this.props.show
    }
  }

  componentWillMount(){
    (this.props.show == true) ? setTimeout(() => { this.setState({show:false})}, 3000) : console.log("NoK")
    console.log(this.setState.show)
  }

   render(){
    return(        
       
<Modal className="modal__submit"
      {...this.props}
      show={this.state.show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered

    >
      <Modal.Body className="modal__submit__body">
      <img className="smile" src={smile} alt=""></img>
        <p className="modal__submit__text"> 
        Дякуємо! Ваше замовлення успішно оформлено!<br/>
Наш менеджер зателефонує Вам для уточнення деталей
        </p>
      </Modal.Body>
    </Modal>

 
    );
}
}



export default Form_Sub;

// const Form = () =>{
//     return(
//         <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog" role="document">
//                 <div class="modal-content">
//                     <div class="mobile__header"></div>
//                     <p class="form__title">Для успішного замовлення необхідно заповнити форму</p>
//                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                         <span aria-hidden="true">&times;</span>
//                     </button>

//                     <div class="modal-body">
//                         <form method='POST' action='send'>
//                             <div class="form-group">
//                                 <label class="input__name">Ім'я<sup>*</sup></label>
//                                 <input type="text" class="form-control" id="usr"></input>
//                             </div>
//                             <div class="form-group">
//                                 <label class="input__name">Телефон<sup>*</sup></label>
//                                 <input type="number" class="form-control" id="phone"></input>
//                             </div>
//                             <div class="form-group">
//                                 <label for="exampleInputEmail1" class="input__name">E-mail <sup>*</sup></label>
//                                 <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"></input>
//                                 <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//                             </div>
//                             <div class="form-group">
//                                 <label for="comment" class="input__name">Коментар до замовлення</label>
//                                 <p class="input__instruction">Тип товару, кількість, розмір нанесення</p>
//                                 <textarea class="form-control form__textarea" id="comment"></textarea>
//                             </div>
//                             <button type="submit" onclick="sendDate()" class="btn btn-primary btn__submit">Submit</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>



//     );
// }

// export default Form;