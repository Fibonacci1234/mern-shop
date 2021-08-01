import React from 'react'
import Products from './products/Products'
import Login from './auth/Login'
import Register from "./auth/Register"
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import {Switch, Route} from "react-router-dom"

function Pages(){
    return(
        <Switch>
            <Route path = "/" exact component={Products}/>
            <Route path = "/login" exact component={Login}/>
            <Route path = "/register" exact component={Register}/>
            <Route path = "/cart" exact component={Cart}/>

            <Route path = "*" exact component={NotFound}/>
        </Switch>
    )
}

export default Pages