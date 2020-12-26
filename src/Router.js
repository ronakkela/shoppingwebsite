import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Products from './Products';
import Cart from './Cart';
import About from "./About";
import Contact from "./Contact";



function Router() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Products} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          
        </Switch>
      </BrowserRouter>
    )
  }
  
  export default Router; 