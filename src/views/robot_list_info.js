const LoadScreen = require('./load_screen.js');
const RobotInfo = require('./robot_info.js');

const RobotListInfo = function (container) {
  this.container = container;
}

RobotListInfo.prototype.bindEvents = function () {
  const robotElements = this.container.children;

  for (element of robotElements) {
    const loadScreen = new LoadScreen(element);
    loadScreen.render();
    const robotInfo = new RobotInfo(element);
    robotInfo.bindEvents();
  }
};


module.exports = RobotListInfo;
