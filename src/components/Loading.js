import React from 'react'
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

const loadingStyles = {
	textAlign: 'center',
	marginTop: '50px'
}
const Loading = () => (
  <div style={loadingStyles}>
		<MuiThemeProvider>
			<CircularProgress size={80} thickness={5} />
		</MuiThemeProvider>
	</div>
)

export default Loading
