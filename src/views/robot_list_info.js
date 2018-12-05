const LoadScreen = require('./load_screen.js');

const RobotListInfo = function (container) {
  this.container = container;
}

RobotListInfo.prototype.bindEvents = function () {
  const robotElements = this.container.children;

  for (element of robotElements) {
    const loadScreen = new LoadScreen(element);
    loadScreen.render();
  }
};


module.exports = RobotListInfo;
