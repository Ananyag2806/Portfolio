import './App.css';
import NavBar from './Components/NavBar';
import Blogs from './Components/Blogs';
import Landing from './Components/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Blog1 from './Components/Blog1';
import Blog2 from './Components/Blog2';

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
			<Router>
				<Fragment>
					<NavBar />

					<Routes>
						<Route path='/' element={<Landing />} />
						<Route exact path='/blogs' element={<Blogs />} />
						<Route exact path='/blog1' element={<Blog1 />} />
						<Route exact path='/blog2' element={<Blog2 />} />
					</Routes>
				</Fragment>
			</Router>
		</div>
	);
}

export default App;
