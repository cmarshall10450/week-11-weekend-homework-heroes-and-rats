const assert = require('assert')
const Task = require('../src/Task')

describe('Task', function () {
  let task

  beforeEach(function () {
    task = new Task(1, 2, 10)
  })

  it('should have a difficulty level', function () {
    assert.strictEqual(task.difficultyLevel, 1)
  })

  it('should have a urgency level', function () {
    assert.strictEqual(task.urgencyLevel, 2)
  })

  it('should have a reward', function () {
    assert.strictEqual(task.reward, 10)
  })

  it('should be marked as not completed at the start', function () {
    assert.strictEqual(task.completed, false)
  })
})