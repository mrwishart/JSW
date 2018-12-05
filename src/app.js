const RobotListInfo = require('./views/robot_list_info.js');
const Arena = require('./views/arena.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const robotListContainer = document.querySelector('aside')
  const robotListInfo = new RobotListInfo(robotListContainer);
  robotListInfo.bindEvents();

})
