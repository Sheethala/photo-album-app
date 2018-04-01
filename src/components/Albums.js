import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import {Link, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './Main'
import Loading from './Loading'
import axios from 'axios';

class Albums extends Component {
	//Gets all the Users using http Request, and rennders them in a list
	constructor(props) {
		super(props);
		this.state = {
			albums : []
		}
	}
	
	componentDidMount(){
		const userId = this.props.match.params.userId
		axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
			.then(res => {
				console.log("THE RES I<S")
				//Res data has the names
				console.log(res)
				this.setAlbumState(res.data)
			})
	}
	
	setAlbumState(albums) {
		this.setState({albums: albums})
	}
	
	getAlbumList() {
		return this.state.albums.map(album => (
				<ListItem
					key={album.id}
					disabled={true}
					leftAvatar={<Avatar>{album.title[0].toUpperCase()}</Avatar>}
				>
				<Link exact="true" to={`/albums/${album.id}`}>
			 {album.title}
			 </Link>
			</ListItem>
		))
	}

	
  render() {
		console.log('Rendering albums')
		console.log(this.props.match.params)
		if(this.state.albums.length === 0) {
			return (
				<Loading />
			)
		}
    return (
			<div>
		<Main />
		<MuiThemeProvider>
			<List>
				{this.getAlbumList()}
			</List>
			</MuiThemeProvider>
		</div>
    );
  }
}

export default Albums;
