import React from 'react'
import './Project.css'

const Project = (projectMap) => {
	let jsonMap = projectMap.projectMap;
	console.log(jsonMap)
	return (
		<div className="card">
			<p className="projectTitle">{jsonMap.title}</p>
			<p>{jsonMap.description}</p>
		</div>
	)
}

export default Project;
