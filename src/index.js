import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import stylesMain from './index.module.css'

const root = ReactDOM.createRoot(document.querySelector('.main-box'))

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)