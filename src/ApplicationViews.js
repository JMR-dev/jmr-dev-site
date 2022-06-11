import React from "react";
import { Route } from "react-router-dom";

const ApplicationViews = () => {
    
    return (

    <main>
        <Route>
            <NavBar />
        </Route>
        <Route>
            <Home />
        </Route>
    </main>
    )
}