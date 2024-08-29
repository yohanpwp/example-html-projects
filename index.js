const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, '/')));
// Use'/' path from the 'index.html' directory
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, 'index.html'))});

app.listen(8000,() => console.log('App is listening on port 8000'));