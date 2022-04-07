import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: 'black',
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	verticalDividerLeft: {
		borderLeft: '2.5px solid #CCD6F6',
		height: '200px',
		left: 0,
		width: '1%',
		position: 'fixed',
		bottom: 0,
		marginLeft: 75,
		marginRight: 75, // Do we really need this?
		[theme.breakpoints.down('sm')]: {
			marginLeft: 50,
		},
	},
	gitHubIcon: {
		position: 'fixed',
		bottom: 220,
		left: 65,
		color: '#CCD6F6',
		fontSize: 25,
		marginRight: 50,
		[theme.breakpoints.down('sm')]: {
			left: 38,
		},
	},
	linkedInIcon: {
		position: 'fixed',
		bottom: 260,
		left: 65,
		color: '#CCD6F6',
		fontSize: 28.5,
		marginRight: 50,
		[theme.breakpoints.down('sm')]: {
			left: 38,
		},
	},
	twitterIcon: {
		position: 'fixed',
		bottom: 303,
		left: 65,
		color: '#CCD6F6',
		fontSize: 28.5,
		marginRight: 50,
		[theme.breakpoints.down('sm')]: {
			left: 38,
		},
	},

	whatsAppIcon: {
		position: 'fixed',
		bottom: 348,
		left: 65,
		color: '#CCD6F6',
		fontSize: 28.5,
		marginRight: 50,
		[theme.breakpoints.down('sm')]: {
			left: 38,
		},
	},

	verticalDividerRight: {
		borderLeft: '2.5px solid #CCD6F6',
		height: '180px',
		right: 0,
		width: '1%',
		position: 'fixed',
		bottom: 0,
		marginRight: 75,
		marginLeft: 75,
		[theme.breakpoints.down('sm')]: {
			marginRight: 50,
		},
	},
	email: {
		writingMode: 'vertical-rl',
		cursor: 'default',
		right: 0,
		position: 'fixed',
		bottom: 220,
		marginRight: 75,
		marginLeft: 75,
		color: '#CCD6F6',
		[theme.breakpoints.down('sm')]: {
			marginRight: 48,
		},
	},
}));

export default function ListDividers() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<a
				href='https://www.linkedin.com/in/ananya-gupta-1a69b5181/'
				target='_blank'>
				<LinkedInIcon className={classes.linkedInIcon}></LinkedInIcon>
			</a>

			<a href='https://github.com/Ananyag2806' target='_blank'>
				<GitHubIcon className={classes.gitHubIcon}></GitHubIcon>
			</a>

			<a href='https://twitter.com/ananyeahgupta' target='_blank'>
				<TwitterIcon className={classes.twitterIcon}></TwitterIcon>
			</a>

			<a href='https://wa.me/8412880506' target='_blank'>
				<WhatsAppIcon className={classes.whatsAppIcon}></WhatsAppIcon>
			</a>

			<div className={classes.verticalDividerLeft}></div>
			<div className={classes.verticalDividerRight}></div>
			<p className={classes.email}>anayag2806@gmail.com</p>
		</div>
	);
}
