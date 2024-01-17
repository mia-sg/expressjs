const express = require('express');
const ejs = require('ejs');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Define a route that renders an EJS template
app.get('/', (req, res) => {
  const data = {
    title: 'Welcome to My App',
    message: 'Hello, EJS!'
  };

  // Render the 'index.ejs' template with the provided data
  res.render('index', data);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
