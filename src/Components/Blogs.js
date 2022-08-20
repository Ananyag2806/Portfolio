import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		textAlign: 'left',
		paddingBottom: 125,
	},
	grd: {
		alignSelf: 'center',
	},
	heading3: {
		color: '#CCD6F6',
		fontSize: 45,
		fontWeight: 600,
		paddingTop: 50,

		[theme.breakpoints.down('md')]: {
			fontSize: 65,
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: 50,
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: 40,
		},
	},
	list: {
		fontFamily: 'Consolas',
		display: 'block',
		textAlign: 'left',
		fontSize: '25px',
		marginLeft: '10%',
	},
}));

function Blogs(props) {
	const classes = useStyles();

	return (
		<div>
			<Typography className={classes.heading3}>
				Welcome to my blogs. You are the first one here! 🎊🎉
			</Typography>
			<br />
			<br />
			<Typography to='/blog1' component={Link} className={classes.list}>
				The first and last interview of my placement season
			</Typography>
			<br />
			<Typography to='/blog2' component={Link} className={classes.list}>
				What I want from my life
			</Typography>
		</div>
	);
}

export default Blogs;
