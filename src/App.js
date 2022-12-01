import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'   //rcc geneate class  base component
import Navbar from './component/Navbar';
import News from './component/News';
                                              //this. ka use kar ke  various bnaa sakte hai

export default class App extends Component {
//  c = ' sonu';
  render() {
    return (
      <div>
        {/* hello my fist {this.c}       */}
        <Navbar/>
      
        <News/>
        
      </div>
    )
  }
}
