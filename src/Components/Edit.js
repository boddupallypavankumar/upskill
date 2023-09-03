import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Tasks from './Task';

function Edit() {

	// Here usestate has been used in order
	// to set and get values from the jsx
	const [taskName, setTaskName] = useState('');
	const [taskDescription, setTaskDescription] = useState('');
	const [id, setid] = useState('');

	// Used for navigation with logic in javascript
	let history = useNavigate()

	// Getting an index of an entry with an id
	var index = Tasks.map(function (e) {
		return e.id; }).indexOf(id);

	// Function for handling the edit and
	// pushing changes of editing/updating
	const handelSubmit = (e) => {

		// Preventing from reload
		e.preventDefault();

		// Getting an index of an array
		let a = Tasks[index]

		// Putting the value from the input
		// textfield and replacing it from
		// existing for updation
		a.taskName = taskName
		a.taskDescription = taskDescription

		// Redirecting to main page
		history('/')
	}


	// Useeffect take care that page will
	// be rendered only once
	useEffect(() => {
		setTaskName(localStorage.getItem('Name'))
		setTaskDescription(localStorage.getItem('Task Description'))
		setid(localStorage.getItem('id'))
	}, [])

	return (
		<div>
			<Form className="d-grid gap-2"
				style={{ margin: '15rem' }}>

				{/* setting a name from the
					input textfiled */}
				<Form.Group className="mb-3"
					controlId="formBasicEmail">
					<Form.Control value={taskName}
						onChange={e => setTaskName(e.target.value)}
						type="text" placeholder="Enter Name" />
				</Form.Group>

				{/* setting a age from the input textfiled */}
				<Form.Group className="mb-3"
					controlId="formBasicPassword">
					<Form.Control value={taskDescription}
						onChange={e => setTaskDescription(e.target.value)}
						type="text" placeholder="Task Description" />
				</Form.Group>

				{/* Hadinling an onclick event
					running an edit logic */}
				<Button
					onClick={e => handelSubmit(e)}
					variant="primary" type="submit" size="lg">
					Update
				</Button>

				{/* Redirecting to main page after editing */}
				<Link className="d-grid gap-2" to='/'>
					<Button variant="warning"
						size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	)
}

export default Edit;