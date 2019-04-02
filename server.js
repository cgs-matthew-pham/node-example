const express = require('express')
const app = express()
const port = 3000

// View items
app.get('/', (req, res) => {

  // This will be replaced with data from the MongoDB
  let toDoList = {
    items: ['Clean room', 'Cook dinner', 'IT homework']
  }

  // Allow ED STEM to access this route
  res.header('Access-Control-Allow-Origin' , 'https://web.edusercontent.com' );

  // Simulate a random delay
  var delay = Math.floor(Math.random() * 2000) + 100;
	setTimeout(function() {
    // Send the JSON object back
		res.json(toDoList);
	}, delay);

});

// Add items
app.get('/add', (req, res) => {

  // Allow ED STEM to access this route
  res.header('Access-Control-Allow-Origin' , 'https://web.edusercontent.com' );

  // Log the query params for now
  // This will be stored in the MongoDB
  console.log(req.query);

  // Will need to work out how to handle DB errors later
  // For now, create a default message
  let result = {result: 'Success!'}

  // Simulate a random delay
  var delay = Math.floor(Math.random() * 2000) + 100;
	setTimeout(function() {
    // Send the JSON object back
		res.json(result);
	}, delay);


});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
