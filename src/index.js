import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { render } from "react-dom";

import HomePage from "./components/HomeComponent";
import AboutPage from "./components/AboutComponent";
import App from "./components/App";

render(<App />, document.getElementById("root"));
