// app.js

const arrayUtils = require('./arrayUtils');

const numbers = [1, 2, 3, 4, 5];

console.log('Sum:', arrayUtils.findSum(numbers));
console.log('Average:', arrayUtils.findAverage(numbers));
console.log('Doubled values:', arrayUtils.doubleArrayValues(numbers));
