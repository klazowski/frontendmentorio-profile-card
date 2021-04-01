"use strict";
const { response } = require('express');
var express = require('express');

var app = express()

app.get('*', (req, res) => {
  response.sendFile('index.html', __dirname)
})

app.listen(5003, () => console.log("Server started at port 5003."));
