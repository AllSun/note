import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'lib-flexible/flexible'
import {
    BrowserRouter as Router
  } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
    <App />
    </Router>
)
