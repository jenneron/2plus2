const body = document.querySelector('body');
const input1 = document.createElement('input');
const input2 = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'Посчитать';

function createError() {
  const element = document.createElement('div');
  element.classList.toggle('eror-message');
  element.style.display = 'none';
  element.textContent = 'Это не число';
  return element;
}

const error1 = createError();
const error2 = createError();

// [input1, error1, input2, error2, button].forEach(elem => body.appendChild(elem));
body.appendChild(input1);
body.appendChild(error1);
body.appendChild(input2);
body.appendChild(error2);
body.appendChild(button);

function buttonClick() {
  const oldResult = document.querySelector('#result');
  if (oldResult !== null) body.removeChild(oldResult);
  error1.style.display = 'none';
  error2.style.display = 'none';

  const firstIsNumber = !Number.isNaN(input1.value) && input1.value !== '-0';
  const secondIsNumber = !Number.isNaN(input2.value) && input2.value !== '-0';
  if (!firstIsNumber || input1.value === '') {
    error1.style.display = 'block';
  }
  if (!secondIsNumber || input2.value === '') {
    error2.style.display = 'block';
  }
  if (firstIsNumber && secondIsNumber && input1.value !== '' && input2.value !== '') {
    const result = document.createElement('result');
    result.id = 'result';
    result.textContent = Number(input1.value) + Number(input2.value);
    body.appendChild(result);
  }
}

button.addEventListener('click', buttonClick);
