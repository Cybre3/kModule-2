let order = (drinkType, qty) => {
    let drinks = ['water', 'coffee', 'coke', 'snacks'];
    let prices = [1, 1.5, 1.4, 2];

    let index = drinks.indexOf(drinkType);
    let price = prices[index];

    return price * qty;

//   switch (drinkType) {
//     case 'coffee':
//       return 1.5 * qty;
//     case 'water':
//       return 1 * qty;
//     case 'coke':
//       return 1.4 * qty;
//     case 'snacks':
//       return 2 * qty;
//   }
};

function main(inputItem, inputQuantity) {
  let totalPrice = order(inputItem, inputQuantity);
  console.log(totalPrice.toFixed(2));
}

main('water', 5);
main('coffee', 2);
