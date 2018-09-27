import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Home from './Components/Home/Home';
import SocialMedia from './Components/SocialMedia/SocialMedia'; 
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import store from './store';
import Dashboard from './Components/Dashboard/Dashboard'; 
import ScrollToTop from "react-router-scroll-top";


class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <HashRouter>
        <ScrollToTop>
      <div className="App">
        {routes}
        <SocialMedia/>
      </div>
       </ScrollToTop>
      </HashRouter>
    </Provider>
    );

    
  }
}

export default App;
