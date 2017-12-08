const Task = function (difficulty, urgency, reward) {
  this.difficultyLevel = difficulty
  this.urgencyLevel = urgency
  this.reward = reward
  this.completed = false
}

Task.prototype.toggleCompletion = function () {
  this.completed = !this.completed
}

module.exports = Task
