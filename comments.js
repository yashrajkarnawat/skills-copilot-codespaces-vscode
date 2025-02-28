// Create web server
const express = require('express');
const app = express();

// Create a router
const router = express.Router();

// Define a middleware function
router.use((req, res, next) => {
  console.log('Time: ', Date.now());
  next();
});

// Define a route
router.get('/', (req, res) => {
  res.send('Comments');
});

// Bind the router with the app
app.use('/comments', router);

// Start the server
app.listen(3000, () => {
  console.log('Server started');
});