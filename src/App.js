import React from "react";
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardines from "./Sardines";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Route exact path='/' key='/'>
          <VendingMachine />
        </Route>
        <Route exact path='/soda' key="soda">
          <Soda />
        </Route>
        <Route exact path='/chips' key="chips">
          <Chips />
        </Route>
        <Route exact path='/sardines' key="sardines">
          <Sardines />
        </Route>

      </BrowserRouter>
    </div>
  );
}

export default App;