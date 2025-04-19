
function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  if (totalPrice > customerCredits) {
    return "Недостатньо коштів!";
  } else {
    return `Ви замовили ${quantity} дроїдів вартістю ${totalPrice} кредитів!`;
  }
}

// Перевірка функції
console.log(makeTransaction(5, 3000, 23000)); // "Ви замовили 5 дроїдів вартістю 15000 кредитів!"
console.log(makeTransaction(3, 1000, 15000)); // "Ви замовили 3 дроїдів вартістю 3000 кредитів!"
console.log(makeTransaction(10, 5000, 8000)); // "Недостатньо коштів!"
console.log(makeTransaction(8, 2000, 10000)); // "Недостатньо коштів!"
console.log(makeTransaction(10, 500, 5000));  // "Ви замовили 10 дроїдів вартістю 5000 кредитів!"