import React from 'react'
import profile from '../../profile.png'
import { SocialIcon } from 'react-social-icons';

const Home = () => {
	return (
		<div>
			<img src={ profile } alt="profile_picture" />
			<h1> Hi! I'm Josh Surette </h1>
			<SocialIcon url="https://twitter.com/joshsurette3" color="red" />
			<SocialIcon url="https://joshsuretteblog.com/" type="wordpress" color="red" />
			<SocialIcon url="https://github.com/jrs33" color="red" />
		</div>
	);
}

export default Home;