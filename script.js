let numbers = [2, 4, 9, 10, 45, 67, 8, 90];  // исходный массив
let evenNumbers = []; // сюда будем добавлять чётные числа

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {   // проверяем чётность
        evenNumbers.push(numbers[i]); // добавляем в новый массив
    }
}

console.log("Boshlang'ich massiv:", numbers);
console.log("Juft sonlarga ajratilgan massiv:", evenNumbers);