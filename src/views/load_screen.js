const LoadScreen = function () {
  this.element = element;
}

LoadScreen.prototype.render = function () {
  console.log(this.element.id);
  const header = document.createElement('p');
  this.element.appendChild(header);
};

module.exports = LoadScreen;
