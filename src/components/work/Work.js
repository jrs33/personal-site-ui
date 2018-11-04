import React, { Component } from 'react'
import Project from './Project'
import axios from 'axios'
import './Work.css'

class Work extends Component {
	constructor(props) {
		super(props);

		this.search = React.createRef();

		this.initialState = {
			totalProjects: 0,
			projects: [],
			query: ''
		};

		this.state = this.initialState;
	}

	getAllProjects() {
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

	handleSearchInput = () => {
		console.log(this.search.current.value)

		let searchQuery = this.search.current.value.trim();
		if(!searchQuery) {
			this.getAllProjects();
			return;
		}

		axios.get('/projects/search/text?q='+searchQuery)
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
		this.getAllProjects()	
	}

	render() {
		return (
			<div>
				<h1>Search Projects</h1>
				<div className="search">
					<input className="searchBox" type="text" ref={this.search} placeHolder="keyword searches..." onChange={this.handleSearchInput} />
					<p className="total">Total: {this.state.totalProjects}</p>
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