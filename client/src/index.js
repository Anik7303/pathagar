import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const nodeEl = document.getElementById("root");
const root = ReactDOM.createRoot(nodeEl);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
