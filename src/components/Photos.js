import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

import Header from './Header'
import photo from '../assets/photo.svg'
import Loading from './Loading'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
		marginTop: '20px',
		marginBottom: '20px',
  },
};

class Photos extends Component {
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
				this.setPhotoState(res.data)
			})
	}
	
	setPhotoState(photos) {
		this.setState({photos: photos})
	}
	
	getPhotoList() {
		return this.state.photos.map(photo => (
			<GridTile
				key={photo.ih}
				title={photo.title}
			>
				<img src={photo.url} />
			</GridTile>
		))
	}

	
  render() {
		if(this.state.photos.length === 0) {
			return (
				<Loading />
			)
		}
    return (
			<div>
				<Header src={photo} title='Album Photos'/>
				<MuiThemeProvider>
					<div style={styles.root}>
					 <GridList
						 cellHeight={200}
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
