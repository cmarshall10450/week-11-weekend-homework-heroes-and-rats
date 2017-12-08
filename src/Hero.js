const Hero = function (name, health, favouriteFood) {
  this.name = name
  this.health = health
  this.favouriteFoor = favouriteFood
  this.tasks = []
}

Hero.prototype.talk = function () {
  return this.name
}

module.exports = Hero