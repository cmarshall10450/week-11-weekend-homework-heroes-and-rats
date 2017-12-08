const Hero = function (name, health, favouriteFood) {
  this.name = name
  this.health = health
  this.favouriteFoor = favouriteFood
  this.tasks = []
}

Hero.prototype.talk = function () {
  return this.name
}

Hero.prototype.eat = function (food) {
  this.health += food.replenishmentValue
}

module.exports = Hero