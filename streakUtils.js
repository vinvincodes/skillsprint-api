// Calculate the current streak (consecutive days)
function calculateStreak(completedDays) {
  if (!completedDays.length) return 0;

  let streak = 1;
  for (let i = completedDays.length - 1; i > 0; i--) {
    if (completedDays[i] - completedDays[i - 1] === 1) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

module.exports = { calculateStreak };
