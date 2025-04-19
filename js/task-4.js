function checkForSpam(message) {
  const normalizedMessage = message.toLowerCase();
  if (normalizedMessage.includes("spam") || normalizedMessage.includes("sale")) {
    return true; 
  } else {
    return false; 
  }
}

// Перевірка функції
console.log(checkForSpam("Останні новини технологій")); // false
console.log(checkForSpam("щотижневий бюлетень JavaScript")); // false
console.log(checkForSpam("Отримайте найкращі пропозиції продажу зараз!")); // true
console.log(checkForSpam("Чудовий SalE, тільки сьогодні ввечері!")); // true
console.log(checkForSpam("Повірте мені, це не спам")); // true
console.log(checkForSpam("Позбудьтеся спам-листів. Наша книга в продажу!")); // true
console.log(checkForSpam("[СПАМ] Як швидко заробити?")); // true