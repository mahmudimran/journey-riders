import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext()

function App() {
const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <p>Name : {loggedInUser.name}</p>
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/destination/:id">
        <Destination></Destination>
        </PrivateRoute>
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="*">
            <NoMatch />
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
