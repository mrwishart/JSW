const PubSub = require('../helpers/pub_sub.js');

const LoadScreen = function (element) {
  this.element = element;
  this.fileInput;
}

LoadScreen.prototype.render = function () {

  this.fileInput = document.createElement('input');
  this.fileInput.type = "file";
  this.fileInput.classList = "load";
  this.element.appendChild(this.fileInput);

  this.fileInput.addEventListener("change", (event) => {
    const newFile = event.target.files[0];
    this.validFile(newFile) ? this.loadFile(newFile) : this.loadError();
  });

};

LoadScreen.prototype.validFile = function (file) {
  return file.type === 'text/plain';
};

LoadScreen.prototype.loadFile = function (file) {

  const fileReader = new FileReader();
  fileReader.readAsText(file);

  fileReader.addEventListener('loadend', (event) => {
    const fileContent = event.target.result;
    const robotName = this.removeExtension(file.name);

    const robotObject = {
      name: robotName,
      code: fileContent
    };

    this.element.innerHTML = '';
  })
};

LoadScreen.prototype.loadError = function () {
  console.error("Invalid File: Need .txt (txt/plain)");
  this.fileInput.value = "";
};

LoadScreen.prototype.removeExtension = function (filename) {
  if (filename.slice(-4) === '.txt') {
    return filename.slice(0, -4);
  } else {
    return filename;
  }
};

module.exports = LoadScreen;
