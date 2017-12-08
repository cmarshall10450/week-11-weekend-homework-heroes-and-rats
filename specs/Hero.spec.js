const assert = require('assert')
const Hero = require('../src/Hero')
const Food = require('../src/Food')

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
    assert.strictEqual(hero.favouriteFoor, 'Mac & Cheese')
  })

  it('should have an empty list of tasks to start with', function () {
    assert.deepStrictEqual(hero.tasks, [])
  })

  it('should be able to talk', function () {
    const result = hero.talk()
    assert.strictEqual(result, 'Superman')
  })

  it('should be able to eat food to increase health', function () {
    const food = new Food('Steak', 100)
    hero.eat(food)

    assert.strictEqual(hero.health, 200)
  })
})
