import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import { Provider } from "react-redux";
import { AppStore } from "./store/store";


function App() {
  return (
    <BrowserRouter>
      <Provider store={AppStore}> 
        <Home />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
