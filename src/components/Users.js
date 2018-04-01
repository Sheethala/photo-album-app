import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import {Link, Route} from 'react-router-dom';
import Albums from './Albums'
import FontIcon from 'material-ui/FontIcon';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './Main'
import user from '../assets/user.svg'
import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

class Users extends Component {
	//Gets all the Users using http Request, and rennders them in a list
	constructor(props) {
		super(props);
		this.state = {
			users : []
		}
	}
	
	setUsersState(users) {
		this.setState({users: users})
	}
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(res => {
				console.log("THE RES I<S")
				//Res data has the names
				console.log(res)
				this.setUsersState(res.data)
			})
	}
	
	getUserList() {
		return this.state.users.map(user => (
				<ListItem
					key={user.id}
					disabled={true}
					leftAvatar={<Avatar>{user.name[0].toUpperCase()}</Avatar>}
				>
				<Link exact="true" to={`/users/${user.id}/albums`}>
			 {user.name}
			 </Link>
			</ListItem>
		))
	}
	
  render() {
    return (
			
			<MuiThemeProvider>
			<Main src={user}/>

			<List>
     		{this.getUserList()}
		</List>
		</MuiThemeProvider>
    );
  }
}

export default Users;