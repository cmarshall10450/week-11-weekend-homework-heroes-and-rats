const assert = require('assert')
const Hero = require('../src/Hero')

describe('Hero', function () {
  let hero

  beforeEach(function () {
    hero = new Hero('Superman', 100, 'Mac & Cheese')
  })

  it('should have a name', function () {
    assert(hero.name, 'Superman')
  })
})
