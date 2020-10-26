import React, { Component } from "react";
import { Link } from 'react-router-dom'
 
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="navbar-brand" href="#">Navbar w/ text</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link to="/" >Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
    <Link to="/about">About</Link>
      </li>
      <li class="nav-item">
        <Link to="great-divas">The Great Divas</Link>
      </li>
      <li class="nav-item">
        <Link to="/repertoire">Repertoire</Link>
      </li>
      <li class="nav-item">
        <Link to="/vocal-health">Vocal Health</Link>
      </li>
      <li class="nav-item">
        <Link to="/resources">Resources</Link>
      </li>
      <li class="nav-item">
        <Link to="/feedback">Feedback</Link>
      </li>
      <li class="nav-item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>
      </React.Fragment>
    );
  }
}
 
export default NavBar;
