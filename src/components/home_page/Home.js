import React from 'react'
import icon from '../../favicon.ico'
import { SocialIcon } from 'react-social-icons';
import './Home.css'

const Home = () => {
	return (
		<div>
			<img src={ icon } alt="profile_picture" />
			<div className="centered">
				<SocialIcon url="https://twitter.com/joshsurette3" color="red" />
				<SocialIcon url="https://joshsuretteblog.com/" type="wordpress" color="black" />
				<SocialIcon url="https://github.com/jrs33" color="red" />
				<SocialIcon url="mailto:joshsurette3@gmail.com" color="black" />
			</div>
		</div>
	);
}

export default Home;
