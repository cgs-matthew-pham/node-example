const express = require('express')
const mongoose = require('mongoose')
const toDoModel = require('./models/ToDo.js');
const app = express()
const port = 3000

//https://medium.com/@rossbulat/using-promises-async-await-with-mongodb-613ed8243900
//http://erikaybar.name/using-es6-promises-with-mongoosejs-queries/
//https://mongoosejs.com/docs/connections.html
//https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose


// Add a new item
app.get('/add', async (req, res) => {

  mongoose.connect('mongodb://127.0.0.1:27017/nodedb?gssapiServiceName=mongodb', {useNewUrlParser: true});

  let toDoList = await toDoModel.findOne();

  toDoList.items.push(req.query.newItem);

  // Allow ED STEM to access this route
  res.header('Access-Control-Allow-Origin' , 'https://web.edusercontent.com' );
  await toDoList.save();

  let result = {result: "Success!"}

  // Send the JSON object back
	res.json(result);
});

// View items
app.get('/', async (req, res) => {
  mongoose.connect('mongodb://127.0.0.1:27017/nodedb?gssapiServiceName=mongodb', {useNewUrlParser: true});

  let toDoList = await toDoModel.findOne();

  // Allow ED STEM to access this route
  res.header('Access-Control-Allow-Origin' , 'https://web.edusercontent.com' );

  // Simulate a random delay
  res.json(toDoList)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
