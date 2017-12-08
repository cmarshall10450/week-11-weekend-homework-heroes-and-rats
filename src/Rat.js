const Rat = function () {}

Rat.prototype.touch = function (food) {
  food.isPoisionous = true
}

module.exports = Rat