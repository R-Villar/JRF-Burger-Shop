import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from "./Components/Home"
import NavBar from './Components/NavBar';
import Cart from './Components/Cart';
import Customize from './Components/Customize';

function App() {

return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/customize">
          <Customize />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      
    </div>
  );
}

export default App;
