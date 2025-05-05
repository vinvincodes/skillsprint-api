const { calculateStreak } = require('./streakUtils');

// In-memory storage: { userId: Set of completed days }
const userProgress = {};

// Mark a task as complete
function markTaskComplete(req, res) {
  const { userId, day } = req.params;
  const dayNum = parseInt(day, 10);

  if (isNaN(dayNum) || dayNum < 1 || dayNum > 30) {
    return res.status(400).json({ error: 'Day must be between 1 and 30' });
  }

  if (!userProgress[userId]) {
    userProgress[userId] = new Set();
  }

  userProgress[userId].add(dayNum);

  return res.json({ message: `Day ${dayNum} marked as complete for user ${userId}` });
}

// Get user progress and streak
function getUserProgress(req, res) {
  const { userId } = req.params;
  const completedDays = userProgress[userId] ? Array.from(userProgress[userId]).sort((a, b) => a - b) : [];
  const streak = calculateStreak(completedDays);

  res.json({
    userId,
    completedDays,
    streak,
    totalCompleted: completedDays.length,
  });
}

module.exports = { markTaskComplete, getUserProgress };