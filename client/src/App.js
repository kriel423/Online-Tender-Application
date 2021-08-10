import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import TestingPage from "./components/navigation/TestingPage";
import Signup from './components/authentication/Signup';
import Login from './components/authentication/Login';

function App() {

  const loggedIn = false;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {!loggedIn? <Redirect to="/login"/>:<TestingPage/>}
          </Route>
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
