import React from 'react'
import './Project.css'

const Project = (projectMap) => {
	let jsonMap = projectMap.projectMap;
	console.log(jsonMap)
	return (
		<div className="card">
			<h1 className="projectTitle">{jsonMap.title}</h1>
			<p>{jsonMap.description}</p>
		</div>
	)
}

export default Project;