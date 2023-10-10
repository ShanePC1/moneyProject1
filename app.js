// Importing the http module 
const http = require("http") 
const path = require('path');
// Importing express module 
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('view')); 
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/controller', express.static(path.join(__dirname, 'controller')));

// Define a route for /Next
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/view/index.html');
});


app.get('/dataEntry', (req, res) => {
  res.sendFile(__dirname + '/view/dataEntry.html');
});


app.get('/incomeEntry', (req, res) => {
  res.sendFile(__dirname + '/view/incomeEntry.html');
});

app.get('/monthlyOutLook', (req, res) => {
  res.sendFile(__dirname + '/view/monthlyOutLook.html');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
