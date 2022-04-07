import './App.css';
import AboutMe from './Components/AboutMe';
import Hero from './Components/Hero';
import NavBar from './Components/NavBar';
import SideLines from './Components/SideLines';
import Experience from './Components/Experience';
import ExperienceXS from './Components/ExperienceXS';
import Contact from './Components/Contact';

// green color: #50CCB5
// background color: #0A192F
// h1: #CCD6F6
// h2: #8892B0
// p: #8892B0
// Font1: Roboto
// Font2: Consolas

// value         |0px     600px    960px    1280px   1920px
// key           |xs      sm       md       lg       xl
// screen width  |--------|--------|--------|--------|-------->
// range         |   xs   |   sm   |   md   |   lg   |   xl

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Hero />
			<SideLines />

			<AboutMe />
			<Experience />
			<ExperienceXS />
			<Contact />
		</div>
	);
}

export default App;
