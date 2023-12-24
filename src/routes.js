import React from "react";
import { Redirect, Switch, Route, Router } from "react-router-dom";
import RouteGuard from "./component/RouteGuard"
import {history} from "./helpers/history"




//pages
import Home from "./component/Home"
import Login from "./component/Login"
import Register from "./component/Register"

function Routes() {
   return (
       <Router history={history}>
           <Switch>
               <RouteGuard
                   exact
                   path="/"
                   component={Home}
               />
               <Route
                   path="/login"
                   component={Login}
               />

                <Route
                path="/register"
                component={Register}
                />
               <Redirect to="/" />
           </Switch>
       </Router>
   );
}
 
export default Routes