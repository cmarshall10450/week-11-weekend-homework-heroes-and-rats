const assert = require('assert')
const Food = require('../src/Food')
const Rat = require('../src/Rat')

describe('Food', function () {
  let food

  beforeEach(function () {
    food = new Food('Steak', 100)
  })

  it('should have a name', function () {
    assert.strictEqual(food.name, 'Steak')
  })

  it('should have a replenishment value', function () {
    assert.strictEqual(food.replenishmentValue, 100)
  })

  describe('Poisoned Food', function () {
    it('should not be poisonous to start with', function () {
      assert.strictEqual(food.isPoisionous, false)
    })

    it('should should be poisonous if it is touched by a rat', function () {
      const rat = new Rat()
      rat.touch(food)

      assert.strictEqual(food.isPoisionous, true)
    })
  })
})
