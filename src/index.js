import 'babel-polyfill';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import { initialiseStore } from "./redux/Store";

// React Select components do not render properly without this.
import 'react-select/dist/react-select.css';

// initialiseStore();
const appRoot = document.getElementById("app");

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    appRoot
);