import './App.css';
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Events from './components/Events/Events';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser, SetLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, SetLoggedInUser]}>
      <h1>{loggedInUser.displayName}</h1>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addEvent">Events</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/addEvent">
            <Events />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
