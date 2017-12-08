const Task = function (difficulty, urgency, reward) {
  this.difficultyLevel = difficulty
  this.urgencyLevel = urgency
  this.reward = reward
  this.completed = false
}

module.exports = Task
