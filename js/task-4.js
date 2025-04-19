function getShippingCost(country) {
  let price;
  switch (country) {
    case "China":
      price = 100;
      return `Shipping to ${country} will cost ${price} credits`;
    case "Chile":
      price = 250;
      return `Shipping to ${country} will cost ${price} credits`;
    case "Australia":
      price = 170;
      return `Shipping to ${country} will cost ${price} credits`;
    case "Jamaica":
      price = 120;
      return `Shipping to ${country} will cost ${price} credits`;
    default:
      return "Sorry, there is no delivery to your country";
  }
}

// Перевірка функції
console.log(getShippingCost("Австралія")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("Німеччина")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Швеція")); // "Sorry, there is no delivery to your country"
