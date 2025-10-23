const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
connectDB();
dotenv.config();
const userRoutes = require('./router/userRoute');

const server = express();
server.use(cors({
    origin: 'http://localhost:3000', // Adjust as needed for your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
server.use(express.json());

// Sample route
server.get('/', (req, resp) => {
    resp.send('Hello World!');
});

server.use('/api/users', userRoutes);


const port = process.env.PORT;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


