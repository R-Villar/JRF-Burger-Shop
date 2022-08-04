import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from "./Components/Home"
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import Customize from './Components/Customize';
import React, { useEffect, useState } from "react";
import background from "./Components/img/burger.jpg"


function App() {
  const [burgersObj, setBurgersObj] = useState([])
  // adds burger to cart
  const [selectedBurger, setSelectedBurger] = useState([])
 

  // fetch request
  useEffect(() => {
    fetch('http://localhost:3000/burgers')
      .then(res => res.json())
      .then(data => setBurgersObj(data))
  }, [])

  // creates a new obj with the form created burger
  const newBurger = newObj => {
    setBurgersObj( burgersObj => [...burgersObj, newObj ])
  }

    
  // adds the selected burger to the cart
  function addCustSelection(addedBurger) {
    setSelectedBurger(prevAddedBurger => [...prevAddedBurger, addedBurger])
  }

  
  return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/cart">
            <Cart selectedBurger={selectedBurger}/>
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
