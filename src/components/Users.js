import Avatar from 'material-ui/Avatar';
import axios from 'axios';
import React, { Component } from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import { Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Albums from './Albums'
import Header from './Header'
import user from '../assets/user.svg'
import Loading from './Loading'
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
		if(this.state.users.length === 0) {
			return (
				<Loading />
			)
		}
    return (
			<MuiThemeProvider>
			<Header src={user} title='Users'/>

			<List>
     		{this.getUserList()}
		</List>
		</MuiThemeProvider>
    );
  }
}

export default Users;