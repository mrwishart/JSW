const PubSub = require('../helpers/pub_sub.js');

const RobotInfo = function (element) {
  this.element = element;
}

RobotInfo.prototype.bindEvents = function () {
  const robotID = this.element.id;

  PubSub.subscribe(`LoadScreen:${robotID}SuccessfullyLoaded`, (event) => {
    const robot = event.detail;
    this.render(robot);
  })
};

RobotInfo.prototype.render = function (robot) {
  this.createViewer(robot.name);
};

RobotInfo.prototype.createViewer = function (name) {

  this.element.classList.add('robot-info-container');

  const nameAndIconContainer = document.createElement('div');
  nameAndIconContainer.classList.add('robot-info-column');

  const nameElement = document.createElement('div');
  nameElement.classList.add('robot-info-row');

  const robotName = document.createElement('p');
  robotName.textContent = name;
  robotName.style.fontSize = this.nameFontSize(name);

  nameElement.appendChild(robotName);

  const iconElement = document.createElement('div');
  iconElement.classList.add('robot-info-row');

  nameAndIconContainer.appendChild(nameElement);
  nameAndIconContainer.appendChild(iconElement);


  const infoContainer = document.createElement('div');
  infoContainer.classList.add('robot-info-column');

  const listContainer = document.createElement('ul');

  const energyElement = document.createElement('li');
  energyElement.textContent = "Energy: ";
  const shieldsElement = document.createElement('li');
  shieldsElement.textContent = "Shields: ";
  const damageElement = document.createElement('li');
  damageElement.textContent = "Damage: ";

  listContainer.appendChild(energyElement);
  listContainer.appendChild(shieldsElement);
  listContainer.appendChild(damageElement);

  const noOfAtts = listContainer.childElementCount;
  const heightPerAtt = 97/noOfAtts;
  const padding = (heightPerAtt-15)/2;

  energyElement.style.padding = `${padding}px 0px`;
  shieldsElement.style.padding = `${padding}px 0px`;
  damageElement.style.padding = `${padding}px 0px`;

  infoContainer.appendChild(listContainer);

  this.element.appendChild(nameAndIconContainer);
  this.element.appendChild(infoContainer);

};

RobotInfo.prototype.nameFontSize = function (name) {
  // if name is more than 16 characters, edit down
  const length = name.length > 16 ? 16 : name.length;
  // Ideal width = 135px
  let widthSize = 135/(length * 0.6);
  // Max font (restricted by height) = 34px
  return widthSize < 34 ? `${widthSize}px` : '34px';
};

module.exports = RobotInfo;
