'use strict';

const inputArray = [];

const pushButtonValueZero = document.querySelector('#Zero').addEventListener('click', function () {
    inputArray.push(document.querySelector('#Zero').value);
    document.querySelector('input').value = null
    document.querySelector('input').value = inputArray.toString().replace(',', '');
});
const pushButtonValueOne = document.querySelector('#One').addEventListener('click', function () {
    inputArray.push(document.querySelector('#One').value);
    document.querySelector('input').value = null
    document.querySelector('input').value = inputArray.toString().replace(',', '');
});
const pushButtonValueTwo = document.querySelector('#Two').addEventListener('click', function () {
    inputArray.push(document.querySelector('#Two').value);
    document.querySelector('input').value = null
    document.querySelector('input').value = inputArray.toString().replace(',', '');
});
const pushButtonValueThree = document.querySelector('#Three').addEventListener('click', function () {
    inputArray.push(document.querySelector('#Three').value);
    document.querySelector('input').value = null
    document.querySelector('input').value = inputArray.toString().replace(',', '');
});
const pushButtonValueFour = document.querySelector('#Four').addEventListener('click', function () {
    inputArray.push(document.querySelector('#Four').value);
    document.querySelector('input').value = null
    document.querySelector('input').value = inputArray.toString().replace(',', '');
});
const pushButtonValueFive = document.querySelector('#Five').addEventListener('click', function () {
    inputArray.push(document.querySelector('#Five').value);
    document.querySelector('input').value = null
    document.querySelector('input').value = inputArray.toString().replace(',', '');
});
const pushButtonValueSix = document.querySelector('#Six').addEventListener('click', function () {
    inputArray.push(document.querySelector('#Six').value);
    document.querySelector('input').value = null
    document.querySelector('input').value = inputArray.toString().replace(',', '');
});
const pushButtonValueSeven = document.querySelector('#Seven').addEventListener('click', function () {
    inputArray.push(document.querySelector('#Seven').value);
    document.querySelector('input').value = null
    document.querySelector('input').value = inputArray.toString().replace(',', '');
});
const pushButtonValueEight = document.querySelector('#Eight').addEventListener('click', function () {
    inputArray.push(document.querySelector('#Eight').value);
    document.querySelector('input').value = null
    document.querySelector('input').value = inputArray.toString().replace(',', '');
});
const pushButtonValueNine = document.querySelector('#Nine').addEventListener('click', function () {
    inputArray.push(document.querySelector('#Nine').value);
    document.querySelector('input').value = null
    document.querySelector('input').value = inputArray.toString().replace(',', '');
});
const pushButtonValueDot = document.querySelector('#Dot').addEventListener('click', function () {
    inputArray.push(document.querySelector('#Dot').value);
    document.querySelector('input').value = null
    document.querySelector('input').value = inputArray.toString().replace(',', '');
});

