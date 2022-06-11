import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Router, Route } from 'react-router-dom';

const JMR_Dev_site = () => {
    return(
        <>
           <Route>
               <NavBar />
               <ApplicationViews />
           </Route>
           </>
           )
}