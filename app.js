// Express-based API with endpoints to track user progress in a 30-day skill challenge.
const express = require('express');
const { markTaskComplete, getUserProgress } = require('./progressController');

const app = express();
app.use(express.json());

// Mark a task as complete
app.post('/progress/:userId/:day', markTaskComplete);

// Get user progress
app.get('/progress/:userId', getUserProgress);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
