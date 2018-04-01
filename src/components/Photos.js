import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import {Link, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import axios from 'axios';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class Photos extends Component {
	//Gets all the Users using http Request, and rennders them in a list
	constructor(props) {
		super(props);
		this.state = {
			photos : []
		}
	}
	
	componentDidMount(){
		const albumId = this.props.match.params.albumId
		axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
			.then(res => {
				console.log("THE RES I<S")
				//Res data has the names
				console.log(res)
				this.setPhotoState(res.data)
			})
	}
	
	setPhotoState(photos) {
		this.setState({photos: photos})
	}
	
	getPhotoList() {
		//@TODO: change it to a map so you don't have to use an array to push elements and it returns
		let photoList = []
		this.state.photos.forEach(photo => {
			photoList.push(
				<GridTile
					key={photo.ih}
					title={photo.title}
					actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
				>
					<img src={photo.url} />
				</GridTile>
			)
		})
		return photoList;
	}

	
  render() {
		console.log('Rendering albums')
		console.log(this.props.match.params)
    return (
		<div>
		<MuiThemeProvider>
		<div style={styles.root}>
	 <GridList
		 cellHeight={180}
		 style={styles.gridList}
	 >
	 	{this.getPhotoList()}
	 </GridList>
 </div>
			</MuiThemeProvider>
		</div>
    );
  }
}

export default Photos;
