const express = require('express');
const app = express();

// Middleware to parse JSON data in incoming requests
app.use(express.json());

// Route handling
app.post('/example', (req, res) => {
  // Access JSON data from the request body
  const jsonData = req.body;

  // Your logic here

  // Send a response
  res.send('Received JSON data');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});