import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>

        </Switch>
      </Router>
    </>
  );
}

export default App;
