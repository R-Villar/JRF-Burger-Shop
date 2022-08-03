import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from "./Components/Home"
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import Customize from './Components/Customize';
import React, { useEffect, useState } from "react";

function App() {
  const [selectedBurger, setSelectedBurger] = useState({})
  const [burgersObj, setBurgersObj] = useState([])

    // fetch request
    useEffect(() => {
      fetch('http://localhost:3000/burgers')
        .then(res => res.json())
        .then(data => setBurgersObj(data))
    }, [])


    const newBurger = newObj => {
      setBurgersObj( burgersObj => [...burgersObj, newObj ])
    }
  // console.log(burgersObj)
    
  // adds the lected customized burger to the customize page
  function addCustSelection(addedBurger) {
    setSelectedBurger(addedBurger)
  }
  
  return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/cart">
            <Cart addCustSelection={addCustSelection}/>
          </Route>
          <Route path="/customize">
            <Customize selectedBurger={selectedBurger} newBurger={newBurger} />
          </Route>
          <Route path="/">
            <Home addCustSelection={addCustSelection}
             burgersObj={burgersObj}
             />
          </Route>
        </Switch>
      </div>
    );
}

export default App;
