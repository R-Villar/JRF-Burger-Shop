import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from "./Components/Home"
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import Customize from './Components/Customize';

function App() {

    const newBurger = obj => {
      console.log('here')
    }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/customize">
          <Customize newBurger={newBurger}/>
        </Route>
        <Route path="/">
          <Home newBurger={newBurger}/>
        </Route>
      </Switch>

      
    </div>
  );
}

export default App;
