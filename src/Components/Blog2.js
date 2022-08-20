import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

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
	para: {
		fontFamily: 'Consolas',
		display: 'block',
		textAlign: 'left',
		fontSize: '20px',
		marginLeft: '10%',
		color: '#8892B0',
		[theme.breakpoints.down('sm')]: {
			marginLeft: 0,
		},
	},
}));

function Blog2() {
	const classes = useStyles();
	return (
		<div>
			<Typography className={classes.heading3}>
				What I want from my life
			</Typography>
			<br />
			<br />
			<Typography className={classes.para}>
				I am a big fan of Elon Musk. I love the work he does, I love how
				he does it, I love what he does in breaks ( I am talking about
				the tweeting, of course), I love how he mocks people, I love
				HIM. I almost cried when I found that I was born on the same day
				as him. One day my friend asked me that if given a chance, would
				I choose to become ( a female version of) Musk. You might think
				that I would jump right in and without missing a beat shout YES
				before my friend finishes the sentence. But I thought about it
				and gently said no. Musk is super rich and super busy. I want to
				be rich and busy. In an interview he said that “I am not sure if
				even I want to be me”.
				<br />
				<br />
				That made me think ‘Yeah right, what do I want from life. What
				do I want to do?’. And the answer was ‘NOT 9-5’.
				<br />
				<br />
				Well, the general path for a software dev is to join a good
				company and work their way to the top. Leave the company for
				higher studies in abroad, usually America (Ah! America, the land
				of opportunities) and eventually settle there. This is as high
				most people will get. Its actually a really nice life filled
				with thrill and excitement. I would get a chance to experience
				the life in a posh city. I would have a big house that would
				have an attic, I would drink water straight out of tap, I would
				have a separate room for my BMW/Mercedes and I would get a good
				salary. I have grown up fantasizing about living there. But that
				life is not for me. I would love to do that for an year or two,
				but not more than that. I don't feel excited when I think about
				that. I feel anxious when I think about trading my time for
				money. There is so much more that I want to do in my life. I
				cant let the time pass away. <br />
				<br />
				Lately I have been getting a lot of advices which go like this -
				‘Do [something] now, you wont get time after starting your job’.
				Makes you think what is the point of having a job if you will
				not get time. The thing is that I want to stay HERE itself, with
				my parents because I never want to be “not available” for them.
				I want to be around when my cousins grow up, I want to be able
				to drop everything and visit my grandparents for a few days, I
				want to never loose touch with my extended family and friends. I
				want to travel around the world and explore different places. I
				want to do interesting things that normally I would do once or
				twice a year, like...idk sky diving or skiing. The questing is
				how am I going to do this with a day job? I dont know.
				<br />
				<br />
				Recently I came across this, the top five regrets of the dying-
				<br />
				"I wish I’d had the courage to live a life true to myself, not
				the life others expected of me."
				<br />
				"I wish I hadn’t worked so hard."
				<br />
				"I wish I’d had the courage to express my feelings."
				<br />
				"I wish I had stayed in touch with my friends."
				<br />
				"I wish that I had let myself be happier."
				<br />
				I already have 3/5 regrets and I am not even 22 yet. This is why
				I have decided to prioritize my personal life before my
				professional life. I will not let my work day ruin the rest of
				the day. I will not worry about small things at work, I will see
				my co workers as friends, I will never loose sleep over little
				things and I will always take care of my health. I. will. have.
				fun. Every day when I will go to sleep, I will look myself in
				the mirror and ask myself “Did you have fun today?” If the
				answer is no for too many days in a row, I will know that
				something has to be changed. I will be very happy if my regrets
				look like this-
				<br />
				“I wish I did not waste so much money on that stupid car.”
				<br />
				“I wish I had never quit playing basketball.”
				<br />
				“I wish had brought that dress and not wait for it to be on
				sale.”
				<br />
				“I wish I could watch [movie/series] for the first time again.”
				<br />
				“I wish I were not on my death bed right now.”
				<br />
				“I wish I had less money.”
				<br />
				This sounds much more like me.
				<br />
				<br />
				(I want a lot of money and a lot of time 🤔, yes I can see the
				problem here)
				<br />
				<br />
				I think I am going to quit my regular job very early on in my
				career and start something of my own. A small company would be
				just fine as long as it gives the the things mentioned above. I
				will be very sad if I get into a college for an MBA or get
				promoted at work. <br />
				<br />
				I realize that I come from a very privileged background to be
				able to say “I want to do what I want” and “I want to quit my
				high paying job”. My parents have worked very hard for me to get
				a good life, and all of their hard work and sacrifices will go
				in vain if I cant live the life that I want. Besides, they would
				not want anything from me except that I stay with them. <br />
				<br />
				So that’s it I guess. Let me know if you are still here, if you
				are one of the two people who have read this (the first one
				being me). Remind me to quit if I haven't in September 2023.
			</Typography>
			<br />
		</div>
	);
}

export default Blog2;
