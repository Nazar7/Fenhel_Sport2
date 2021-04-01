import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Main from './Components/Content/Main';
import Clothe from './Components/Clothes/Clothes';
import Payment_Delivery from './Components/Payment_Delivery/Payment_Delivery';
import Contacts from './Components/Contacts/Contacts';
import {Route, BrowserRouter, Link, Switch} from 'react-router-dom';
import Info from './Components/Info/Info';
import ModalScreen from './Components/Modal_Screen/ModalScreen'
import { ModalContainer, ModalRoute } from 'react-router-modal';





class App extends Component {

  state={
    renderResponse: ''
  }

  // getResponse = async() => {
  //   const response = await fetch('/');
  //   const body = await response.jason();
  //   if(response.statuse !== 200) throw(body.message);
  //   return body;
  // }

  // componentDidMount(){
  //   this.getResponse()
  //     .then(res => {
  //       const someData = res;
  //       this.setState({renderResponse: someData})
  //     })

  // }

  render(){
    const { renderResponse } = this.state;
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exect path="/main" component={Main} />
        <Route path="/sport-clothe" 
          render={ () => 
            <Clothe url='sport-clothe' title='СПОРТИВНИЙ ОДЯГ'/>}/>
        <Route path="/corporate-clothe" 
          render={ () => 
            <Clothe url='corporate-clothe' title='КОРПОРАТИВНИЙ ОДЯГ'/>}/>
        <Route path="/payment-delivery" component={Payment_Delivery} />
        <Route  path="/contacts" component={Contacts} />
        <Route path="/information" component={Info} />
        {/* <Route path="/sport-clothe/size-chart" 
          render={ () => 
            <ModalScreen />}/> */}
        {/* <Route exect path="/information/size" component={ModalScreen} /> */}
        
        {/* <Route exect path="/corporate-clothe/size-chart" component={ModalScreem} /> */}
        {/* <Route exect path="/size-chart" component={Modal} /> */}
        {/* <Clothe title="СПОРТИВНИЙ ОДЯГ"/> */}
        {/* <Clothe title="КОРПОРАТІВНІЙ ОДЯГ"/> */}
        {/* <Main_Content /> */}
        <Footer />
     
      </div>
    </BrowserRouter>
 
  );
}
}

export default App;
