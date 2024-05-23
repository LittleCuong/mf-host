import React from "react";
import ReactDOM from "react-dom";
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css'
import "./index.scss";
import Home from "./Home";
import outputs from '../amplify_outputs.json';

Amplify.configure(outputs);

const App = () => (
  <Home/>
);

ReactDOM.render(<App />, document.getElementById("app"));
