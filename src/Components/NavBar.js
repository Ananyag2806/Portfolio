import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
// import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	desktop: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	mobile: {
		display: 'none',
		width: '100%',
		[theme.breakpoints.down('sm')]: {
			display: 'block',
		},
	},

	appBar: {
		backgroundColor: '#0A192F',
		color: '#50CCB5',
	},

	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		fontFamily: 'monospace',
	},
	ul: {
		listStyleType: 'none',
		display: 'flex',
		justifyContent: 'flex-end',
	},
	li: {
		textAlign: 'right',
		marginRight: 30,
		alignSelf: 'baseline',
		cursor: 'pointer',
		textDecoration: 'none',
	},
	resume: {
		fontFamily: 'monospace',
		fontSize: 20,
		backgroundColor: '#0A192F',
		color: '#50CCB5',
		border: '2.5px solid #50CCB5',
		paddingRight: 25,
		paddingLeft: 25,
	},
	ulDrawer: {
		padding: 0,
	},
	liDrawer: {
		width: 350,
		display: 'block',
		fontFamily: 'monospace',
		fontSize: 25,
		backgroundColor: '#0A192F',
		color: '#50CCB5',
		textAlign: 'center',
		lineHeight: 2,
	},
	fullList: {
		width: 'auto',
	},
	drawer: {
		background: '#0A192F',
		height: '100%',
	},
	menuBtn: {
		fontFamily: 'monospace',
		fontSize: 20,
		backgroundColor: '#0A192F',
		color: '#50CCB5',
		border: '1px solid #50CCB5',
		paddingRight: 25,
		paddingLeft: 25,
	},
}));

export default function NavBar() {
	const classes = useStyles();

	const [state, setState] = React.useState({
		right: false,
	});

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<div
			className={clsx(classes.list, classes.drawer, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role='presentation'
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			<Typography variant='h6' className={classes.title}>
				<ul className={classes.ulDrawer}>
					<li className={classes.liDrawer}>
						<Link href='#about' to='/' className={classes.li}>
							About
						</Link>
					</li>
					<li className={classes.liDrawer}>
						<Link href='#about' to='/blogs' className={classes.li}>
							Blogs
						</Link>
					</li>
					<li className={classes.liDrawer}>
						<Link href='#about' to='/' className={classes.li}>
							Work & Projects
						</Link>
					</li>
					<li className={classes.liDrawer}>
						<Link href='#about' to='/' className={classes.li}>
							Contact
						</Link>
					</li>
					<li className={classes.liDrawer}>
						<Button className={classes.resume}>
							<a
								href='https://drive.google.com/file/d/1oaAFziFFa5pQY2ng2kz8cQcHF0aIJkZW/view'
								target='_blank'>
								Resume
							</a>
						</Button>
					</li>
				</ul>
			</Typography>
		</div>
	);

	return (
		<div className={classes.root}>
			<AppBar className={classes.appBar} position='static'>
				<Toolbar className={classes.desktop}>
					<Typography variant='h6' className={classes.title}>
						<ul className={classes.ul}>
							<Link href='#about' to='/' className={classes.li}>
								About
							</Link>
							<Link to='/blogs' className={classes.li}>
								Blogs
							</Link>
							<Link to='/' className={classes.li}>
								Work & Projects
							</Link>
							<Link to='/' className={classes.li}>
								Contact
							</Link>

							<li className={classes.li}>
								<Button className={classes.resume}>
									<a
										href='https://drive.google.com/file/d/1oaAFziFFa5pQY2ng2kz8cQcHF0aIJkZW/view'
										target='_blank'>
										Resume
									</a>
								</Button>
							</li>
						</ul>
					</Typography>
				</Toolbar>
			</AppBar>
			<div>
				<div className={classes.mobile}>
					<AppBar className={classes.appBar} position='static'>
						<Toolbar>
							<div>
								{/* <MenuRoundedIcon/> */}
								{['Menu'].map((anchor) => (
									<React.Fragment key={anchor}>
										<Button
											className={classes.menuBtn}
											onClick={toggleDrawer(
												anchor,
												true
											)}>
											{anchor}
										</Button>
										<Drawer
											anchor={anchor}
											open={state[anchor]}
											onClose={toggleDrawer(
												anchor,
												false
											)}>
											{list(anchor)}
										</Drawer>
									</React.Fragment>
								))}
							</div>
						</Toolbar>
					</AppBar>
				</div>
			</div>
		</div>
	);
}
