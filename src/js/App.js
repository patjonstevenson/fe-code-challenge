import React from "react";
import { Route } from "react-router-dom";
import Routes from "./routes";

import Cart from "../pages/Cart";
import Dashboard from "../pages/Dashboard";

export default () => {
    console.log("WE'RE IN APP.JS");
    return (
        <div className="app">
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/" component={Dashboard} />

            {/* {...Routes} */}
        </div>
    )
}