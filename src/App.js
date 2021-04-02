import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './componand/Header/Header';
import Home from './componand/Home/Home';
import Login from './componand/Login/Login';
import Admin from './componand/Admin/Admin';
import Order from './componand/Order/Order';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './componand/PrivateRoute/PrivateRoute';
import CheekOut from './componand/CheekOut/CheekOut';
import NotFound from './componand/NotFound/NotFound';
import Deal from './componand/Deal/Deal';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <PrivateRoute path='/cheekOut/:pdKey'>
            <CheekOut />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <PrivateRoute path='/admin'>
            <Admin />
          </PrivateRoute>
          <PrivateRoute path='/order'>
            <Order />
          </PrivateRoute>
          <Route path='/deals'>
            <Deal />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
