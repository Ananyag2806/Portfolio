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

function Blog1() {
	const classes = useStyles();
	return (
		<div>
			<Typography className={classes.heading3}>
				The first and last interview of my placement season
			</Typography>
			<br />
			<br />
			<Typography className={classes.para}>
				Hey everyone! I am writing this detailed doc for those of you
				who want to know the extreme, smallest details of my Citi
				interview, how I prepared, what I prepared, why I prepared…blah
				blah blah.
				<br />
				<br />
				I started preparing quite early on because I was very stressed
				about getting a job, I took it very seriously. I was feeling
				very insecure about my future and getting a job was an important
				part of my next 3 year plan (Teachable Moment: You don’t need to
				start very early or take it VERY seriously or be very stressed
				about it. Its actually very easy to get a job).
				<br />
				<br />
				So basically there are 3 parts that we need to study, DSA,
				Programming languages and some Math n stuff (in decreasing
				number of significance and complexity). I used to start with
				Math n stuff, 1 hour everyday, and then Programming languages
				for at least 2 hours per day. And remaining day goes into
				solving 3-4 DSA questions (hardly, its tough😭). I studied DSA
				on gfg, Programming languages on Tutorialspoint and Javapoint
				and Maths and all from a big fat book I bought.
				<br />
				<br />
				Then when Citi came to the campus, I took out previous questions
				from gfg and started practicing those. All the DSA questions
				that were asked in online test were asked before, so I did well.
				Also the MCQ questions about programming languages and Math n
				shit were also available online on indiabix.com. So I was well
				prepared.
				<br />
				<br />
				The first round was conducted on 25th August. It was 2 hours
				long and had 4 sections - <br />
				1. Maths
				<br />
				2. Other stuff (Logical and verbal)
				<br />
				3. Programming Language theory MCQ
				<br />
				4. DSA
				<br />
				---- question on grey code. (The logic was correct in my code
				but for some reason, it did not pass testcases)
				<br />
				---- the famous rat in a maze question which is solved using
				recursion. (Got this one right)
				<br />
				<br />
				Then the results and slots for personal interview came on 29th.
				The PI was scheduled for the next day, 30th August (Ah! I will
				never forget this day). I was the first candidate, my interview
				started at 8 AM and went on for a good 30 mins. I had to wake up
				early for this (this was the least of my concerns that day).
				<br />
				<br />
				My interviewer was great! He was very kind and considerate.
				First I was asked to give a brief introduction about myself.
				Then he started with some basic logical questions -
				<br />
				<br />
				1. you have a 4 lit bottle and a 6 lit bottle, how can you take
				out 5 lit from it(Teachable Moment: when you are thinking of a
				solution, think it out loud. This way the interviewer will know
				how you approach the problem and you don’t want to sit mum in
				your interview. Sometimes, the interviewer only wants to know
				how you approach the problem). The trick was to shift water from
				one bottle to another and I was trying to come up with the
				solution then he said nvm its ok, you can stop, you know the
				trick. But I insisted to complete and he waited for me and I got
				the answer.
				<br />
				2. tell me what is 23 X 33 without using the calculator. The
				trick here is to split 23 into 20 + 3 and 33 into 30 + 3. <br />
				3. DSA question - how to make a stack using queue. I couldn’t
				remember the solution, I took stacks for granted. I should have
				revised it. So I tried to come up with something, I knew we use
				2 queues and I started doing something then he said this is
				enough and we moved on.
				<br />
				4. DSA question - don’t remember. And it looked like he was not
				happy with my answers. I could see this job slipping out of my
				hands.
				<br />
				5. Then he unenthusiastically asked me to explain my project
				(can’t blame him, this is on me and I am sorry). And this was
				the turning point of my interview. I went into great detail and
				explained him everything. I hadn’t started the development then
				so I explained everything I came up with. He seemed really
				impressed. I explained how I came up with it, how I validated
				the idea and few details about implementation, the problems I
				was facing. This went on for a good 10 minutes. After that I
				could see the job coming back on the table, and the interviewer
				also seemed invested in me. When I was not able to answer the
				next question, he said “Come on Ananya, think!”. Seemed like he
				was really rooting for me.
				<br />
				6. Then he asked a few questions about react, which was
				mentioned in my resume.
				<br />
				7. How to test a calculator. The answer is to divide the small
				overwhelming tasks into smaller ones. First test basic addition,
				subtraction, multiplication and division. Then move on to
				testing BODMAS rule. Then move on to advanced stuff. I don’t
				think I gave a satisfactory answer.
				<br />
				8. Basic questions on React, as it was listed on my resume. How
				do you pass values from one component to other? Answer: by using
				something called props.
				<br />
				<br />
				At the end he asked me if I had any questions for him. I asked
				something, he said somethings and I said ok.
				<br />
				<br />
				Technical Interview Ends
				<br />
				<br />
				I knew it went well and for some reason I was feeling very
				optimistic that day (for a change). I was not concerned at all
				about the results. Then at around 9.30, I got a mail for next
				round, which was scheduled at 11. (Coming up now: The best
				conversation I ever had)
				<br />
				<br />
				1. Asked me about my day and how were the previous rounds.
				<br />
				2. Basic introduction.
				<br />
				3. I said I liked to play games on my PC and the interviewer’s
				face immediately got lit up. He asked which games you play?
				Subnautica (because its decent) and GTA. He said- ”wow that’s
				great, I never graduated from Contra Strike. I am trying to make
				my daughter play Minecraft but she is not listening to me, MAYBE
				YOU CAN CONVINCE HER TO PLAY MINECRAFT IF YOU JOIN!!!” Oh my god
				whaaat!!? At this point I felt relieved of the pressure and
				really started to enjoy this conversation. This conversation
				went on to become the best conversation of my life!
				<br />
				4. Then he moved on and said that this round is just to know you
				a bit more. <br />
				5. Question: ‘What is something you are very proud of? Something
				you brag about? I said that when I was in 11th and 12th std, my
				math teacher used to ask very small but extremely detailed
				questions while explaining a topic. And very few students could
				answer that, and I was one of those few. And once my sir said to
				me “Ananya ko chota maths bahut ache se jamta hai, acha hai
				chota maths he ana chahiye”. This was a long conversation, and
				my interviewer was very receptive, he was great! I spoke
				something, then he spoke something, so it was deep discussion.
				And honestly, this was the best conversation I ever had. I
				really enjoyed it! And I don’t like to speak!
				<br />
				6. Somehow the conversation steered into mentorship and guiding
				people. I might have said that I got a really great Math teacher
				(its Chhattani Sir, if you are wondering).
				<br />
				7. Question: ‘Why do want to do this? Why will you work hard for
				this? What drives you?’ I said ‘I want to make things that
				people love and appreciate.’ I elaborated it a bit, gave an
				example, maybe of Tesla. The interviewer was visibly amused. He
				looked shocked! This is when I thought that I had a good chance
				to get selected. <br />
				8. We talked more about something. My phone also rang at one
				point. It was my friend Tanvi calling to check on me. I
				cancelled the call and said sorry.
				<br />
				<br />
				And that’s how I passed the best 20 minutes of my life
				<br />
				<br />
				The End
				<br />
				<br />
				At around 9, I got a message that I got in.
				<br />
				<br />
				Edit: I just found out that that my interview went great not
				because I was a great candidate, but because my interviewer is
				too good. I recently got a chance to talk to him, I hope he
				remembers me. I am now making it my life’s purpose to show him
				that he made the right decision by hiring me. Also did I mention
				that it was the best conver…oh yeah I did.
				<br />
				<br />
				Interview Tips-
				<br />
				<br />
				1. Don’t be too hard on yourselves. 2. Sometimes bad things
				happen. Luck does play an important role in getting selected.
				Maybe you don’t get great interviewers, maybe something you did
				not study comes up or maybe you don’t get selected after
				everything went well. You cant blame yourself for that, you need
				to move on. I got selected because I had great interviewers, I
				happened to have good answers to the questions asked, I found
				some of these questions online and a tone of things went well
				for me to land this job. 3. Remember that they are here to pick
				someone. If they don’t pick you, they will pick someone else and
				your competition decreases. Its a win for you, win for others
				and a win for the company.
				<br />
				<br />
				Real Interview Tips-
				<br />
				<br />
				1. Have a solid resume. Don’t put unnecessary things on your
				resume (like a paragraph about yourself and your photo) and
				don’t leave a lot of white spaces. Your resume should be tightly
				packed with projects and/or internships. Write 2-3 points
				explaining the technologies used and things learned under each
				project/internship.
				<br />
				2. The answers to questions on OOPS, DBMS, Java, C++ and C
				should be on the tip of your tongue.
				<br /> 3. When thinking about any answer, think out loud. Let
				the interviewer know what’s going on in your head. <br />
				4. Don’t even say a word about things you don’t know. Likewise,
				if you want the interviewer to ask you something, just subtly
				say a word about it and chances are that they would want to know
				more about it.
				<br />
				5. Prepare some basic puzzles and logical questions. 6. Ask
				questions at the end.
			</Typography>
			<br />
		</div>
	);
}

export default Blog1;
