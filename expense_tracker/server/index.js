const express = require('express');
const mongoose = require('mongoose')
const TaskSchema = require('./model');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://Sarfraj:UseSarfrajData120@cluster0.rse9f.mongodb.net/?retryWrites=true&w=majority').
then(() => {
	console.log("DB Connected");
})
app.use(express.json())
app.use(cors({
	origin: '*'
}))

app.get('/', (req, res) => {
	res.send('<h1>Hello World </h1>')
})

app.post('/addTask', async(req, res) => {
	const { todo } = req.body;
	try{
		const newTask = new TaskSchema({
			todo: todo
		})
		await newTask.save();
		return res.json(await TaskSchema.find());
	} catch(err) {
		console.log(err);
	}
})

app.get('/getTasks', async(req, res) => {
	try{
		return res.json(await TaskSchema.find());
	} catch(err) {
		console.log(err);
	}
})

app.delete('/deleteTask/:id', async(req, res) => {
	try {
		await TaskSchema.findByIdAndDelete(req.params.id)
		return res.json(await TaskSchema.find());
	} catch(err) {
		console.log(err);
	}
})

app.patch('/updateTask/:id', async(req, res) => {
	const updatedTodo = req.body
	try {
		await TaskSchema.findByIdAndUpdate(req.params.id, updatedTodo);
		return res.json(await TaskSchema.find());
	} catch(err) {
		console.log(err)
	}
})

app.listen(5000, (req, res) => {
	console.log("Server is listening...");
})