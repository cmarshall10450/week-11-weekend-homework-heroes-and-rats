const assert = require('assert')
const Food = require('../src/Food')

describe('Food', function () {
  let food

  beforeEach(function () {
    food = new Food('Steak', 100)
  })

  it('should have a name', function () {
    assert.strictEqual(food.name, 'Steak')
  })
})
