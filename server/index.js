const express = require('express');
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.post('/add', (request, response) => {
    // console.log(request.body);
    response.send('Hi');
});

server.listen(3000, () => {
    console.log('Server running on port: 3000.');
});