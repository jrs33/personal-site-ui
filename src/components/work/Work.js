import React, { Component } from 'react'
import Project from './Project'
import axios from 'axios'

class Work extends Component {
	constructor(props) {
		super(props);

		this.initialState = {
			totalProjects: 0,
			projects: []
		};

		this.state = this.initialState;
	}

	updateProjectState() {
		axios.get('/projects/search/text')
		.then(response => {
			if(response.data) {
				this.modifyState(response.data.totalHits, response.data.hits)
				return;
			}
			throw new Error('no data');
		})
		.catch(error => {
			console.log(error);
		})
	}

	modifyState = (totalHits, results) => {
		this.setState({
			totalProjects: totalHits,
			projects: results
		});
	}

	componentDidMount() {
		this.updateProjectState()	
	}

	render() {
		return (
			<div>
				<h1>Total: {this.state.totalProjects}</h1>
				<ul>
					{this.state.projects.map(project => 
						<Project key={project.id} projectMap={project.sourceAsMap} />
					)}
				</ul>
			</div>
		)
	}
}

export default Work;