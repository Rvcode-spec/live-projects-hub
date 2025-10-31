const express = require('express');
const dbPool = require('./config/db');
const cors = require('cors');
const saveContactMessage = require('./controllers/contactController');
const dotenv = require('dotenv');
dotenv.config();
dbPool.connect();


// Create server
const server = express();

const corsOptions = {
  origin: 'https://labxcode.netlify.app/', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

server.use(cors(corsOptions));

//Middleware
server.use(express.json());

//Routes
server.get('/', (req, resp) => {
  resp.send("Welcome to the LabxCode Backend Server");
})

server.post('/api/saveContact', saveContactMessage.saveContactMessage);


//localhost:5000 
const port = process.env.PORT;
server.listen(port, () => {
  console.log(`server is start localhost:${port}`);

})