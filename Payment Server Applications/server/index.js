const express = require('express');
const dotenv = require('dotenv');
const database = require('./config/DB');
database;
const userRouter = require('./router/userRouter');


dotenv.config();


const app = express();
// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/users', userRouter);

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});