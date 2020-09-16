import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'; 
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import View from './components/View';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} ></Route>
          <Route path="/About" exact component={About} ></Route>
          <Route path="/Contact" exact component={Contact} ></Route>
          <Route path="/addUser" exact component={AddUser}></Route>
          <Route path="/editUser/:id" exact component={EditUser}></Route>
          <Route path="/viewUser/:id" exact component={View}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
