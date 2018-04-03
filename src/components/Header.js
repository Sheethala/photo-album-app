import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
  render() {
    return (
			<div className="App">
				<header className="App-header">
					<img src={this.props.src} className="App-logo" alt="logo" />
					<h1 className="App-title">{this.props.title}</h1>
				</header>				
			</div>
    );
  }
}

export default Header;