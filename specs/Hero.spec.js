const assert = require('assert')
const Hero = require('../src/Hero')
const Food = require('../src/Food')
const Task = require('../src/Task')

describe('Hero', function () {
  let hero

  beforeEach(function () {
    hero = new Hero('Superman', 100, 'Mac & Cheese')
  })

  it('should have a name', function () {
    assert.strictEqual(hero.name, 'Superman')
  })

  it('should have a health value', function () {
    assert.strictEqual(hero.health, 100)
  })

  it('should have a favourite food', function () {
    assert.strictEqual(hero.favouriteFood, 'Mac & Cheese')
  })

  it('should have an empty list of tasks to start with', function () {
    assert.deepStrictEqual(hero.tasks, [])
  })

  it('should be able to talk', function () {
    const result = hero.talk()
    assert.strictEqual(result, 'Superman')
  })

  describe('Food', function () {
    it('should be able to eat food to increase health', function () {
      const food = new Food('Steak', 100)
      hero.eat(food)

      assert.strictEqual(hero.health, 200)
    })

    it('should increase health by 1.5 x the replenishment value if the food is the hero\'s favourite food', function () {
      const food = new Food('Mac & Cheese', 100)
      hero.eat(food)

      assert.strictEqual(hero.health, 250)
    })
  })

  it('should be able to add tasks', function () {
    const task = new Task(1, 2, 10)
    hero.addTask(task)

    assert.deepStrictEqual(hero.tasks, [task])
  })

  it('should be able to add tasks', function () {
    const task = new Task(1, 2, 10)
    hero.addTask(task)
    hero.removeTask(task)

    assert.deepStrictEqual(hero.tasks, [])
  })

  describe('Sorting Tasks', function () {
    let task1, task2, task3

    beforeEach(function () {
      task1 = new Task(1, 4, 100)
      task2 = new Task(3, 1, 50)
      task3 = new Task(2, 3, 25)

      hero.addTask(task1)
      hero.addTask(task2)
      hero.addTask(task3)
    })

    it('should be able to sort tasks by difficulty', function () {
      hero.sortTasks(function (a, b) {
        return a.difficultyLevel - b.difficultyLevel
      })

      assert.deepStrictEqual(hero.tasks, [task1, task3, task2])
    })

    xit('should be able to sort tasks by urgency', function () {

    })

    xit('should be able to sort tasks by reward', function () {

    })
  })

})
