// index.js

const numbers = [1, 2, 3, 4, 5];

// Функция для нахождения суммы элементов массива
function findSum(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input is not an array');
    }

    return array.reduce((sum, num) => sum + num, 0);
}

// Функция для нахождения среднего значения элементов массива
function findAverage(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input is not an array');
    }

    if (array.length === 0) {
        return 0;
    }

    const sum = findSum(array);
    return sum / array.length;
}

// Дополнительная функция (пример): удваивает каждый элемент массива
function doubleArrayValues(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input is not an array');
    }

    return array.map(num => num * 2);
}

console.log('Sum:', findSum(numbers));
console.log('Average:', (numbers));
console.log('Doubled values:', doubleArrayValues(numbers));
