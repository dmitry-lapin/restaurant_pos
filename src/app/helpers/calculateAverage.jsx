export default function calculateAverage(arr) {
    if (arr.length === 0) {
      return 0; // Возвращаем 0, если массив пустой, чтобы избежать деления на ноль.
    }
  
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / arr.length;
    return average;
  }