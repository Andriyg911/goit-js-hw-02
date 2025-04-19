function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content);
  const paddingWidth = parseFloat(padding) * 2;
  const borderWidth = parseFloat(border) * 2;
  const totalWidth = contentWidth + paddingWidth + borderWidth;
  return totalWidth;
}
console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200


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