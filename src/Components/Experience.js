import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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
		display: 'block',
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	content: {
		flexGrow: 1,
		backgroundColor: '#0A192F',
		display: 'flex',
		paddingLeft: 175,
		paddingRight: 150,
		[theme.breakpoints.down('sm')]: {
			paddingLeft: 125,
			paddingRight: 150,
		},
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
		color: '#CCD6F6',
		width: 250,
	},

	heading3: {
		color: '#CCD6F6',
		fontSize: 30,
		fontWeight: 600,
		paddingTop: 50,
		paddingLeft: 225,
		paddingBottom: 50,
		textAlign: 'left',
		[theme.breakpoints.down('md')]: {
			fontSize: 65,
			paddingLeft: 175,
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: 50,
			paddingLeft: 60,
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: 40,
			paddingLeft: 0,
		},
	},

	paragraph: {
		color: '#8892B0',
		marginTop: 30,
		lineHeight: 1.7,
		paddingLeft: 0,
		fontSize: 20,
		textAlign: 'left',
		// [theme.breakpoints.down('md')]: {
		//     marginLeft: 0,
		//     marginRight: 0,
		// },
		// [theme.breakpoints.down('sm')]: {
		//     marginLeft: 40,
		//     paddingLeft: 40,

		// },
		// [theme.breakpoints.down('xs')]: {
		//     width: "100%",
		//     marginLeft: 0,
		//     paddingLeft: 0,
		// },
	},
	paragraphFade: {
		color: '#8892B0',
		marginTop: 30,
		lineHeight: 1.7,
		paddingLeft: 0,
		fontSize: 20,
		textAlign: 'left',
		// [theme.breakpoints.down('md')]: {
		//     marginLeft: 0,
		//     marginRight: 0,
		// },
		// [theme.breakpoints.down('sm')]: {
		//     marginLeft: 40,
		//     paddingLeft: 40,

		// },
		// [theme.breakpoints.down('xs')]: {
		//     width: "100%",
		//     marginLeft: 0,
		//     paddingLeft: 0,
		// },
	},
	paragraphHighlight: {
		color: '#50CCB5',
		lineHeight: 1.7,
		paddingLeft: 0,
		fontSize: 20,
		fontWeight: 500,
		textAlign: 'left',
		// [theme.breakpoints.down('md')]: {
		//     marginLeft: 0,
		//     marginRight: 0,
		// },
		// [theme.breakpoints.down('sm')]: {
		//     marginLeft: 40,
		//     paddingLeft: 40,

		// },
		// [theme.breakpoints.down('xs')]: {
		//     width: "100%",
		//     marginLeft: 0,
		//     paddingLeft: 0,
		// },
	},
	tabContent: {
		padding: 0,
		margin: 0,
	},
}));

export default function VerticalTabs() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Typography className={classes.heading3}>
				Work Experience
			</Typography>

			<div className={classes.content}>
				<Tabs
					orientation='vertical'
					variant='scrollable'
					value={value}
					onChange={handleChange}
					aria-label='Vertical tabs example'
					className={classes.tabs}>
					<Tab label='EvolvingX' {...a11yProps(0)} />
					<Tab label='EvolvingX' {...a11yProps(1)} />
				</Tabs>
				<TabPanel value={value} index={0}>
					<Typography className={classes.paragraphHighlight}>
						Frontend Developer - Entrepreneurship Platform
					</Typography>
					<Typography className={classes.paragraphFade}>
						August 2020 - June 2021
					</Typography>
					<Typography className={classes.paragraph}>
						Developed Entrepreneurship Platform from ground up
						including business logic, with a strong team of ten
						other developers, under the guidance of CEO.
						<br></br>Created various iterations of Information
						Architecture, Wireframe and Data Model.
						<br></br>Contributed in development of the frontend of
						Entrepreneurship Platform using React, MaterialUI,
						JavaScript and HTML/CSS.
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
						Oversaw the group of interns working on the Disaster
						Management Platform, using the experience and insights
						gained by working on the Entrepreneurship Development
						Platform.
					</Typography>
				</TabPanel>
			</div>
		</div>
	);
}
