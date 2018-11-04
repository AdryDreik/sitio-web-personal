import React, { Component, Fragment } from 'react';
import  { Navbar, Footer } from './layouts/';

export default class App extends Component {
  render () {
    return <Fragment>
      <Navbar/>
      <Footer/>
    </Fragment>
  }
}