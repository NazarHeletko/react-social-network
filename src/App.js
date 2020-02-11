import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import HeaderContainer from "./Components/Header/HeaderContainer";
import MainContent from "./Components/MainContent/MainContent";
import Preloader from "./Components/common/Preloader/Preloader";
import {initializedSucessThunk} from "./redux/app-reducer";
import {initializedSimpleSelector} from "./redux/selectors";

function App(props) {
      useEffect(()=>{
          props.initializedSucessThunk();
      },[]);
      if(!props.initialized) return <div className='app-preloader-wrapper'><Preloader /></div>;
      return (
        <BrowserRouter>
                <div className="App">
                      <HeaderContainer/>
                      <MainContent/>
                </div>
        </BrowserRouter>
      );
}

let mapStateToProps = (state) => {
    return{
        initialized: initializedSimpleSelector(state)
    }
};

export default connect(mapStateToProps, {initializedSucessThunk})(App);
