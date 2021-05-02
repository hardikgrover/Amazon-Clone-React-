
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home'
import Login from './Login'
import { auth } from './firebase'
import { useStateValue } from './StateProvider';

import React, { useEffect } from 'react'




function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser)

      if (authUser) {
        // user just logged in or was already logged in

        dispatch({
          type: 'SET_USER',
          user: authUser

        })
      } else {
        // the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/checkout">
            <Header></Header>

            <Checkout></Checkout>
          </Route>
          <Route path="/">
            <Header></Header>

            <Home></Home>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
