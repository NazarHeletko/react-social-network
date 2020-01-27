import React from 'react';
import './App.css';
import HeaderContainer from "./Components/Header/HeaderContainer";
import {Provider} from 'react-redux';
import store from './redux/redux-store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HeaderContainer/>
      </Provider>
    </div>
  );
}

export default App;
