import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import UserProfile from './components/UserProfile/UserProfile';
function App() {
    return(
      <BrowserRouter>
          <MainPage/>
          {/* <Footer/> */}
      </BrowserRouter>
    );
  }

export default App;
