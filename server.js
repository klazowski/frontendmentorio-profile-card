'use strict';
var express = require('express');
var path = require('path');
var app = express();

const root = path.resolve(__dirname);

app.get('/', (req, res) => {
  res.sendFile('index.html', { root });
});

app.get('/:filename', (req, res) => {
  res.sendFile(req.params.filename, { root });
});

app.get('/images/:filename', (req, res) => {
  res.sendFile(req.params.filename, { root: path.resolve(root, 'images') });
});

app.listen(5003, () => console.log('Server started at port 5003.'));
