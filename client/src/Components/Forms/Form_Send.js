import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, {Component} from 'react';
import s from './Form_Send_Style.scss'
import { Redirect} from 'react-router-dom';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import {Route, BrowserRouter} from 'react-router-dom';
import FormOpenBtn from './Form_Open_Btn';
import Form_Sub from './Form_Submit'
import { useState } from 'react';



export default class Form_Submit extends Component{

  constructor(props) {
    
    super(props)
        this.state ={
            userName: '',
            userPhone: '',
            userEmail: '',
            userMessage: '',
            modalShow: true,
            setModalShow: true

        }
        this.useState = {
          modalShow: true
        }
      }

   
      changeHandler = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value            

        })
    }

    handleCloseModal () {
      this.setState(this.props.onHide);
    }
    submitHeandler = e => {
      e.preventDefault();
      const book = {
        userName: this.state.userName,
        userPhone: this.state.userPhone,
        userEmail: this.state.userEmail,
        userMessage: this.state.userMessage,
      }
      this.setState({
        userName: '',
        userPhone: '',
        userEmail: '',
        userMessage: '',

      });
      
      axios
          .post('http://localhost:3001/main/order-form', book)
          .then((res) =>{
            const resData = res.data.showModalSubmit;
            this.setState({showModalSubmit : resData});
            console.log(this.state.showModalSubmit)
          })
          .catch((error) => {
              console.log(error)
             
          });
          this.handleCloseModal();

        }

        submitHandler = event => {
          event.preventDefault();
          event.target.className += "was-validated";
        };

        render(){
       
          const { userName, userPhone, userEmail, userMessage } = this.state

    return(
      <>
      {this.props.show == true ?

            <Form 
            className='modal__form'
            {...this.props}
            onSubmit={this.submitHeandler}
            method='POST'
            action='http://localhost:3001/main/order-form'
            >
              <h2 className="form__title">Для успішного замовлення необхідно заповнити форму</h2>
              <Form.Group className='form__inputs' controlId="formBasicEmail">
                <Form.Group >
                  <Form.Label className='input__name'>Ім'я<sup>*</sup></Form.Label>
                  <Form.Control 
                  required
                  className="form-control"
                  value={this.state.fname}
                  onChange={this.changeHandler}
                  type="text" placeholder="Ім'я" name='userName' value={userName} onChange={this.changeHandler} id="usr" />
                </Form.Group>
                <Form.Group >
                  <Form.Label className='input__name'>Телефон<sup>*</sup></Form.Label>
                  <Form.Control
                  required
                  value={this.state.fphone}
                  onChange={this.changeHandler} 
                  type="number" placeholder="Телефон" name='userPhone' value={userPhone} onChange={this.changeHandler} id="phone"/>
                </Form.Group>
                <Form.Group >
                  <Form.Label className='input__name'>E-mail<sup>*</sup></Form.Label>
                  <Form.Control 
                  required
                  value={this.state.femail}
                  onChange={this.changeHandler} 
                  type="email" placeholder="Email" name='userEmail' value={userEmail} onChange={this.changeHandler} id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                </Form.Group>
                <Form.Group >
                  <Form.Label
                  required
                  value={this.state.fmessage}
                  onChange={this.changeHandler}  
                  className='input__name'>Коментар до замовлення<br></br><p className='input__instruction'>Тип товару, кількість, розмір нанесення</p></Form.Label>
                  <Form.Control rows="4" type="textarea" as="textarea" name='userMessage' value={userMessage} onChange={this.changeHandler}  id="comment" aria-describedby="emailHelp"/>
                </Form.Group>
                <Form.Text className="text-muted" >
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Button className='btn__send' type="submit"  class="btn__send" variant="primary">
                Submit
              </Button>
              <span className='close__btn__form' variant="secondary" onClick={this.props.onHide} aria-hidden="true">&times;</span>
            </Form>

: <Redirect to={"/main"} />}
      {(this.state.showModalSubmit == true) ? <Form_Sub show={true}/> : <p></p>}
  </>
    )
      }
    }
