import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Users from './components/Users'
import Albums from './components/Albums'
import { Switch, Route } from 'react-router-dom'
import Routes from './Routes'
import Main from './components/Main'
class App extends Component {
  render() {
		//Have a route for default to render the list of users and maybe a header????
    return (
			<div>
				<Routes />
			</div>
    );
  }
}

export default App;
