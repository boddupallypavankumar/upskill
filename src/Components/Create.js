import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';
import Tasks from './Task';
function Create() {

	// Making usestate for setting and
	// fetching a value in jsx
	
	const [taskName, setTaskName] = useState('');
	const [taskDescription, setTaskDescription] = useState('');

	// Using useNavigation for redirecting to pages
	let history = useNavigate();

	// Function for creating a post/entry
	const handelSubmit = (e) => {
		e.preventDefault(); // Prevent reload

		const ids = uuid() // Creating unique id
		let uni = ids.slice(0, 8) // Slicing unique id

		// Fetching a value from usestate and
		// pushing to javascript object
		let a = taskName, b = taskDescription
		Tasks.push({ id: uni, taskName: a, taskDescription: b})

		// Redirecting to home page after creation done
		history('/')
	}

	return (
		<div >
			<Form className="d-grid gap-2"
				style={{ margin: '15rem' }}>

				{/* Fetching a value from input textfirld
					in a setname using usestate*/}
				<Form.Group className="mb-3"
					controlId="formBasicName">
					<Form.Control onChange=
						{e => setTaskName(e.target.value)}
						type="text"
						placeholder="Enter Name" required />
				</Form.Group>

				{/* Fetching a value from input textfirld in
					a setage using usestate*/}
				<Form.Group className="mb-3"
					controlId="formBasicAge">
					<Form.Control onChange=
						{e => setTaskDescription(e.target.value)}
						type="text"
						placeholder="Task Description" required />
				</Form.Group>

				{/* handing a onclick event in button for
					firing a function */}
				<Button
					onClick={e => handelSubmit(e)}
					variant="primary" type="submit">
					Submit
				</Button>

				{/* Redirecting back to home page */}
				<Link className="d-grid gap-2" to='/'>
					<Button variant="info" size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	)
}

export default Create;