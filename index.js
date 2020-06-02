let body = document.querySelector('body');
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let button = document.createElement('button');
button.textContent = 'Посчитать';
let error1 = createError();
let error2 = createError();

[input1, error1, input2, error2, button].forEach(elem => body.appendChild(elem));

button.addEventListener('click', buttonClick);

function buttonClick() {
    let _result = document.querySelector('#result');
    if (_result !== null) body.removeChild(_result);
    error1.style.display = 'none';
    error2.style.display = 'none';

    let firstIsNumber = isFinite(input1.value);
    let secondIsNumber = isFinite(input2.value);
    if(!firstIsNumber || input1.value === '') {
        error1.style.display = 'block';
    }
    if(!secondIsNumber || input2.value === '') {
        error2.style.display = 'block';
    }
    if(firstIsNumber && secondIsNumber && 
       input1.value !== '' && input2.value !== '') {
        let result = document.createElement('result');
        result.id = 'result';
        console.log(typeof(input1.value))
        result.textContent = parseInt(input1.value) + parseInt(input2.value);
        body.appendChild(result);
    }
}

function createError() {
    let element = document.createElement('div')
    element.classList.toggle('eror-message');
    element.style.display = 'none';
    element.textContent = 'Это не число';
    return element;
}