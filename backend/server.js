// index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Sample route for testing
app.get('/', (req, res) => {
  res.send('Hello from the Node.js backend!');
});

// Add more routes here (e.g., user routes, authentication routes)

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
