document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const button = document.querySelector('#form')
  button.addEventListener('submit', testFileFunction)
})

const testFileFunction = function (event) {
  event.preventDefault();


  const fileA = event.target[0].files[0];
  const fileB = event.target[1].files[0];

  const button = document.querySelector('#form')
  button.innerHTML = '';

  // console.dir(fileA);
  // console.dir(fileB);

  const readerA = new FileReader();
  readerA.readAsText(fileA);

  const readerB = new FileReader();
  readerB.readAsText(fileB);

  readerA.addEventListener('loadend', (event) => {
    const text = event.target.result;
    const output = document.querySelector('#test-file');
    console.log(text);
    output.textContent = text;
  });

  readerB.addEventListener('loadend', (event) => {
    const text = event.target.result;
    const output = document.querySelector('#test-file');
    output.textContent += text;
  });

  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d')
  console.dir(ctx);

  ctx.imageSmoothingQuality = 'high';

  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillRect(380, 380, 30, 30);

  let xCord = 20;
  let yCord = 20;
  let length = 30;
  let xSpeed = 3;
  let ySpeed = 0;
  let angle = 0.0;
  let lineLength = 15
  let gravity = 2.8;

  const rectMid = 395;
  const rectWidth = 15;

  const travel = function () {

    ctx.clearRect(0, 0, 500, 500);

    ctx.fillRect(rectMid - rectWidth, rectMid - rectWidth, rectWidth*2, rectWidth*2);

    ctx.beginPath();
    ctx.arc(xCord, yCord, 15, 0, Math.PI * 2, true);
    ctx.fill();

    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.beginPath();
    ctx.moveTo(xCord, yCord);
    xLine = xCord + (lineLength * Math.sin(angle));
    yLine = yCord + (lineLength * Math.cos(angle));
    ctx.lineTo(xLine, yLine);
    ctx.stroke();

    let xDiff = xCord - rectMid;
    let yDiff = yCord - rectMid;

    angle = Math.atan(xDiff/yDiff) + Math.PI;

    ctx.fillStyle = 'rgb(200, 0, 0)';
    ctx.fillRect(380, 380, 30, 30);


    xCord += xSpeed;
    ySpeed += gravity;
    ySpeed %= 20;
    yCord += ySpeed;
    // console.log(xCord);

    if (xCord > 485 || xCord < 15) {xSpeed *= -1; }
    if (yCord > 470) {ySpeed *= -1; yCord = 470;}

    window.requestAnimationFrame(travel);
  }

  window.requestAnimationFrame(travel);

  // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  // ctx.fillRect(30, 30, 30, 30);
}
