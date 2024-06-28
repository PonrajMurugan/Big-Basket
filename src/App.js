import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/header';
import Header2 from './Components/Header/header2';
import Main from './Components/Main/main';
import Apps from './Components/Static/Apps';
import Footer from './Components/Footer/Footer';
import Mains from './Components/Bank-Offers/bank-route';




const App = () => {
  return (
    
    <Router>
      <div className="">
        <Header />
        <Header2 />
        <Main />
        <Apps />
        <Mains />
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;




