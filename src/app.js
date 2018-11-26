document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const button = document.querySelector('#form')
  button.addEventListener('submit', testFileFunction)
})

const testFileFunction = function (event) {
  event.preventDefault();
  const fileA = event.srcElement[0].files[0];
  const reader = new FileReader();
  reader.readAsText(fileA);

  reader.addEventListener('loadend', (event) => {
    const text = event.target.result;
    const output = document.querySelector('#test-file');
    output.textContent = text;
  })
}
