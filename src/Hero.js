const Hero = function (name, health, favouriteFood) {
  this.name = name
  this.health = health
  this.favouriteFood = favouriteFood
  this.tasks = []
}

Hero.prototype.talk = function () {
  return this.name
}

Hero.prototype.eat = function (food) {
  if (this.favouriteFood === food.name) {
    this.health += food.replenishmentValue * 1.5
  } else {
    this.health += food.replenishmentValue
  }
}

module.exports = Hero