import React from 'react';
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Provider} from 'react-redux';
import store from './redux/redux-store';
import MainContent from "./Components/MainContent/MainContent";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Provider store={store}>
            <HeaderContainer/>
            <MainContent/>
          </Provider>
        </div>
    </BrowserRouter>
  );
}

export default App;
