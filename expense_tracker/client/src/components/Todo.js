import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './Todo.css'

const Todo = () => {

	const [todos, setTodos] = useState([{}]);
	const [newTask, setNewTask] = useState('');

	//runs only once => []
	useEffect(() => {
		axios.get('http://localhost:5000/getTasks').then((res) => {
			console.log(res.data);
			setTodos(res.data)
		})
	}, [])

	const submitHandler = (e) => {
		e.preventDefault();

		axios.post('http://localhost:5000/addTask', { todo: newTask }).then(
			res => setTodos(res.data)
		)
	}
	const deleteTodo = (id) => {
		axios.delete(`http://localhost:5000/deleteTask/${id}`).then(
			res => setTodos(res.data)
		)
	}
	const editTodo = (id) => {
		axios.patch(`http://localhost:5000/updateTask/${id}`).then(
			res => setTodos(res.data)
		)
	}
	return (
		<div>
			<form onSubmit={submitHandler}>
				<input 
					className='input'
					type='text'
					placeholder='Add Todo'
					onChange={(e) => setNewTask(e.target.value)}
					value={newTask}
				/>
				<button type="submit">Submit</button>
			</form>
			{
				todos.map((todo) => (
					<div key={todo._id} className='todo'>
						<h1>{todo.todo}</h1>
						<button className='edit' onClick={() => editTodo(todo._id)} >Edit</button>
						<button className="button" onClick={() => deleteTodo(todo._id)}>Delete</button>
					</div>
				))
			}
		</div>
	)
}

export default Todo