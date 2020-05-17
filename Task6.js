const summNumbers = function () {
  let numbers = [];
  let total = 0;
  while (true) {
    let input = prompt(
      "Введите число! Чтобы посчитать их сумму - нажмите отмена"
    );

    if (input === null) {
      break;
    }

    input = Number(input);
    const notANumber = Number.isNaN(input);
    if (notANumber === true) {
      continue;
    }

    input = Number(input);
    numbers.push(input);
    console.log(numbers);
  }
  for (number of numbers) {
    total += number;
  }

  console.log(`Общая сумма чисел равна ${total}`);
};

summNumbers();
