import React from 'react'
import icon from '../../favicon.ico'
import elasticsearch from '../../elasticsearch.png';
import { SocialIcon } from 'react-social-icons';
import './Home.css'

const Home = () => {
	return (
		<div>
			<img src={ icon } alt="profile_picture" />
			<div className="centered">
				<SocialIcon url="https://twitter.com/joshsurette3" color="red" />
				<SocialIcon url="https://joshsuretteblog.com/" type="wordpress" color="red" />
				<SocialIcon url="https://github.com/jrs33" color="red" />
			</div>
			<hr />
			<div className="thanks">
				<p> Special thanks to: </p>
				<a href="https://www.elastic.co/">
					<img className="icon" src={ elasticsearch } alt="elasticsearch" />
				</a>
			</div>
		</div>
	);
}

export default Home;