import React, { Component } from 'react';
import { Link } from 'react-router';
import '../App.css';

export default class Header extends Component {
  render(){
    return(
      <header id="headerthingy">
        <Link to="/"><img src="../public/static/volunteer.png" alt="The logo or something goes here?"/></Link>
        <p>This is the header (please add some design or whatever here ok)</p>
      </header>
    )
  }
}
