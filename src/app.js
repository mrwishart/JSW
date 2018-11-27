document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const button = document.querySelector('#form')
  button.addEventListener('submit', testFileFunction)
})

const testFileFunction = function (event) {
  event.preventDefault();

  const fileA = event.target[0].files[0];
  const fileB = event.target[1].files[0];

  console.dir(fileA);
  console.dir(fileB);

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
}
