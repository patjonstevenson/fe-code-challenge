import React from "react";
import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Cart from "../pages/Cart";

export default [
    <Route path="/" component={Dashboard} />,
    <Route path="/cart" component={Cart} />
]