import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: '30px',
	},

	gitHubIcon: {
		color: '#CCD6F6',
		fontSize: '40px',
		margin: '20px',
	},
	linkedInIcon: {
		color: '#CCD6F6',
		fontSize: '40px',
		margin: '20px',
	},
	twitterIcon: {
		color: '#CCD6F6',
		fontSize: '40px',
		margin: '20px',
	},
	email: {
		color: '#CCD6F6',
		fontSize: '40px',
		margin: '20px',
	},
}));

export default function ListDividers() {
	const classes = useStyles();

	return (
		<div id='contact' className={classes.root}>
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
			<a href='https://twitter.com/ananyeahgupta' target='_blank'>
				<MailIcon className={classes.twitterIcon}></MailIcon>
			</a>
			<a href='https://wa.me/8412880506' target='_blank'>
				<WhatsAppIcon className={classes.twitterIcon}></WhatsAppIcon>
			</a>
		</div>
	);
}
