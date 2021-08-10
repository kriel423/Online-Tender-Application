import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Signup from './components/authentication/Signup';
import Login from './components/authentication/Login';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/signup'>
            <Signup/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
