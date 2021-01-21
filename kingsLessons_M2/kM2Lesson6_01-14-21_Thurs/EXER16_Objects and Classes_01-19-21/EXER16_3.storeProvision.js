class product {
  constructor(product, qty) {
    this.product = product;
    this.qty = qty;
  }
}

function main(inStoreItems, orderedItems) {
  let products = [];
  let qtys = [];
  for (let item in orderedItems) {
    if (item % 2 === 0) {
      products.push(orderedItems[+item]);
    } else {
      qtys.push(orderedItems[+item]);
    }
  }
  let itemsToAdd = products.filter((el) => !inStoreItems.includes(el));
  let qtyToAdd = qtys.filter((elqty) => !inStoreItems.includes(itemsToAdd));
  for (let product in itemsToAdd) {
    inStoreItems.push(itemsToAdd[product], qtys.indexOf(product));
  }
}
main(
  ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
