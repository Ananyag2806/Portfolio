import React from 'react';
import Hero from './Hero';
import SideLines from './SideLines';
import AboutMe from './AboutMe';
import Experience from './Experience';
import ExperienceXS from './ExperienceXS';
import Contact from './Contact';

function Landing() {
	return (
		<div>
			<Hero />
			<SideLines />
			<AboutMe />
			<Experience />
			<ExperienceXS />
			<Contact />
		</div>
	);
}

export default Landing;
