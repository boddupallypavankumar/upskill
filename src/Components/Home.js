import React from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import Tasks from './Task';

function Home() {

	let history = useNavigate()

	// You may skip this part if you're
	// using react-context api or redux
	function setID(id, taskName, taskDescription) {
		localStorage.setItem('id', id);
		localStorage.setItem('Name', taskName);
		localStorage.setItem('Task Description', taskDescription);
	}

	// Deleted function - functionality
	// for deleting the entry
	function deleted(id) {

		var index = Tasks.map(function (e) {
			return e.id; }).indexOf(id);

		// deleting the entry with index
		Tasks.splice(index, 1)

		// We need to re-render the page for getting
		// the results so redirect to same page.
		history('/')
	}

	return (
		<div style={{ margin: '10rem' }}>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>Name</th>
						<th>Task Description</th>
					</tr>
				</thead>
				<tbody>

					{/* Mapping though every element
						in the array and showing the
						data in the form of table */}
					{Tasks.map((item) => {
						return (
							<tr>
								<td>{item.taskName}</td>
								<td>{item.taskDescription}</td>

								{/* getting theid,name, and
									age for storing these
									value in the jsx with
									onclick event */}
								<td><Link to={`/edit`}>
									<Button onClick={(e) =>
									setID(item.id, item.taskName, item.taskDescription)}
									variant="info">
									Update</Button></Link>
								</td>

								{/* Using thr deleted function passing
									the id of an entry */}
								<td><Button onClick={e => deleted(item.id)}
									variant="danger">Delete</Button></td>
							</tr>
						)
					})}
				</tbody>
			</Table>

			{/* Button for redirecting to create page for
				insertion of values */}
			<Link className="d-grid gap-2" to='/create'>
				<Button variant="warning" size="lg">Create</Button>
			</Link>
		</div>
	)
}

export default Home;