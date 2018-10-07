import React from 'react'

const Project = (projectMap) => {
	let jsonMap = projectMap.projectMap;
	console.log(jsonMap)
	return (
		<div>
			<h1>{jsonMap.title}</h1>
			<p>{jsonMap.description}</p>
		</div>
	)
}

export default Project;