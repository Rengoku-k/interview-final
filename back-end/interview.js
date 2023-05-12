const express = require('express');
const app = express();

// Endpoint to generate random numbers
app.get('/random', (req, res) => {
  const randomNum = Math.floor(Math.random() * 100); // Generate a random number between 0 and 100
  res.json({ number: randomNum });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});