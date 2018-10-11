import React from 'react'
import profile from '../../profile.png'
import { SocialIcon } from 'react-social-icons';
import './Home.css'

const Home = () => {
	return (
		<div>
			<img src={ profile } alt="profile_picture" />
			<h1 className="centered"> Josh Surette </h1>
			<h6 className="centered"> Software Engineer @ Drift </h6>
			<hr />
			<div className="centered">
				<SocialIcon url="https://twitter.com/joshsurette3" color="red" />
				<SocialIcon url="https://joshsuretteblog.com/" type="wordpress" color="red" />
				<SocialIcon url="https://github.com/jrs33" color="red" />
			</div>
		</div>
	);
}

export default Home;