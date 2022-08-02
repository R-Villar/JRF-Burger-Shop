import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from "./Components/Home"
import NavBar from './Components/NavBar';

function App() {

return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/about">Cart</Route>
      </Switch>

      
    </div>
  );
}

export default App;
