import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js' //add .js for files
import usersRoutes from './routes/users.js'
import hotelsRoutes from './routes/hotels.js'
import roomsRoutes from './routes/rooms.js'

import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = express();
dotenv.config();

const PORT = 8800;

const connect = async () => {
	try {
		const mongo_url = "mongodb+srv://Sarfraj:UseSarfrajData120@cluster0.rse9f.mongodb.net/booking?retryWrites=true&w=majority";
		await mongoose.connect(mongo_url);
		console.log("Connected to mongoDB");
	} catch (error) {
		throw error;
	}
}

mongoose.connection.on("disconnected", () => {
	console.log("mongoDB disconnected!");
})

//middlewares
app.use(cors())
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/hotels", hotelsRoutes);
app.use("/api/rooms", roomsRoutes);


app.listen(PORT, () => {
	connect();
	console.log(`Server listening on port ${PORT}`);
})