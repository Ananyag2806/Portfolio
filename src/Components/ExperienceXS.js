import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		'aria-controls': `vertical-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#0A192F',
		display: 'none',
		[theme.breakpoints.down('xs')]: {
			display: 'block',
		},
	},
	content: {
		flexGrow: 1,
		backgroundColor: '#0A192F',
		display: 'flex',
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		color: '#CCD6F6',
		width: 250,
	},

	heading3: {
		color: '#CCD6F6',
		fontSize: 40,
		fontWeight: 600,
		paddingBottom: 40,
		textAlign: 'left',
	},

	paragraph: {
		color: '#8892B0',
		marginTop: 30,
		lineHeight: 1.7,
		paddingLeft: 0,
		fontSize: 20,
		textAlign: 'left',
	},
	paragraphFade: {
		color: '#8892B0',
		marginTop: 30,
		lineHeight: 1.7,
		paddingLeft: 0,
		fontSize: 20,
		textAlign: 'left',
	},
	paragraphHighlight: {
		color: '#50CCB5',
		lineHeight: 1.7,
		paddingLeft: 0,
		fontSize: 20,
		fontWeight: 500,
		textAlign: 'left',
	},
	tabContent: {
		padding: 0,
		margin: 0,
	},
}));

export default function CenteredTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Paper className={classes.root}>
			<Typography variant='heading' className={classes.heading3}>
				Work Experience
			</Typography>
			<Tabs
				value={value}
				onChange={handleChange}
				// indicatorColor="primary"
				// textColor="primary"
				centered
				className={classes.tabs}>
				<Tab label='EvolvingX' {...a11yProps(0)} />
				<Tab label='EvolvingX' {...a11yProps(1)} />
			</Tabs>

			<TabPanel value={value} index={0}>
				<Typography className={classes.paragraphHighlight}>
					Frontend Developer - Entrepreneurship Platform
				</Typography>
				<Typography className={classes.paragraphFade}>
					August 2020 - present
				</Typography>
				<Typography className={classes.paragraph}>
					• Worked with a team of 10 developers and created various
					iterations of Information Architecture, Wireframe and Data
					Model. <br></br>• Contributed in development of the frontend
					platform using React, MaterialUI, JavaScript and HTML/CSS.
				</Typography>
			</TabPanel>

			<TabPanel value={value} index={1}>
				<Typography className={classes.paragraphHighlight}>
					Team Lead - Disaster Management Platform
				</Typography>
				<Typography className={classes.paragraphFade}>
					March 2021 - June 2021
				</Typography>
				<Typography className={classes.paragraph}>
					• Oversaw the complete development of Disaster Management
					Platform and lead the development team.
				</Typography>
			</TabPanel>
		</Paper>
	);
}
