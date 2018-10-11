import React, { Component } from 'react'
import Project from './Project'
import axios from 'axios'
import './Work.css'

class Work extends Component {
	constructor(props) {
		super(props);

		this.initialState = {
			totalProjects: 0,
			projects: [],
			query: ''
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

	handleSearchInput() {
		axios.get('/projects/search/text?q='+this.search.value)
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

	modifyState = (totalHits, results, query='') => {
		this.setState({
			totalProjects: totalHits,
			projects: results,
			query: query
		});
	}

	componentDidMount() {
		this.updateProjectState()	
	}

	render() {
		return (
			<div>
				<div className="search">
					<i className="inline">Total: {this.state.totalProjects}</i>
				</div>
				<div>
					<li className="projects">
						{this.state.projects.map(project => 
							<Project key={project.id} projectMap={project.sourceAsMap} />
						)}
					</li>
				</div>
			</div>
		)
	}
}

export default Work;