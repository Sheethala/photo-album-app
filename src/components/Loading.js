import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RefreshIndicator from 'material-ui/RefreshIndicator';


const style = {
  container: {
		textAlign: 'center',
		marginTop: '50px'  
	},
  refresh: {
    display: 'inline-block',
    position: 'relative',
  },
};

const Loading = () => (
  <div style={style.container}>
		<MuiThemeProvider>
			<RefreshIndicator
				size={80}
				left={10}
				top={0}
				status="loading"
				style={style.refresh}
			/>
		</MuiThemeProvider>
	</div>
)

export default Loading
