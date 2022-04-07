import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import photo from './Photo.jpg';

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
		paddingLeft: 150,
		[theme.breakpoints.down('md')]: {
			fontSize: 65,
			paddingLeft: 175,
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: 50,
			paddingLeft: 150,
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
		paddingLeft: 150,
		fontSize: 20,
		[theme.breakpoints.down('md')]: {
			paddingLeft: 175,
			marginRight: 10,
		},
		[theme.breakpoints.down('sm')]: {
			marginLeft: 40,
			paddingLeft: 40,
			paddingRight: 65,
		},
		[theme.breakpoints.down('xs')]: {
			width: '100%',
			marginLeft: 0,
			paddingLeft: 0,
			paddingRight: 0,
		},
	},
	image: {
		// height: 700,
		// [theme.breakpoints.down('md')]: {
		//     height: 400,
		// },
		// [theme.breakpoints.down('sm')]: {
		//     height: 300,
		// },
		width: '80%',
	},
}));

function AboutMe() {
	const classes = useStyles();
	return (
		<div id='about' className={classes.root}>
			<Container>
				<Typography className={classes.heading3}>About Me</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6} className={classes.grd}>
						<Typography className={classes.paragraph}>
							I am a final year Computer Engineering student. I
							like to design and make beautiful frontend
							applications. I am currently learning MERN stack so
							that I can make full stack projects. Apart from this
							I am also good at C++ and Java. I also have a good
							hold on different data structures and algorithms and
							have spent a lot of time practicing them. I am a big
							Open Source enthusiast and like to contribute to it.
							<br></br>I like to play videogames and read books in
							free time. My favourite videogame is Far Cry 3 and
							GTA. My favourite book is Outliers by Malcom
							Gladwell. I also like playing Chess and currently I
							am working on a cool project about chess.
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<center>
							<img className={classes.image} src={photo}></img>
						</center>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default AboutMe;
