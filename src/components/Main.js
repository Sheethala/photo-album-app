import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Switch, Route } from 'react-router-dom'

class Main extends Component {
  render() {
		//Have a route for default to render the list of users and maybe a header????
    return (
			<div className="App">
				<header className="App-header">
					<img src={this.props.logo} className="App-logo" alt="logo" />
					<h1 className="App-title">User Photos</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>				
			</div>
    );
  }
}

export default Main;