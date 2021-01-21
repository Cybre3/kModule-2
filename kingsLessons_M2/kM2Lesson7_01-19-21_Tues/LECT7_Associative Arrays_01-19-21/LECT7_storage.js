function main(arr) {
  // create an empty map
  let map = new Map();

  // Iterate through the input, parse and store it in the Map (key/Value)

  arr.forEach((item) => {
    // parse (key/value);
    let [product, quantity] = item.split(' ');
    
    //check if the Map does not havethis key
    if (!map.has(product)) {
      // store in the Map
      map.set(product, quantity);

    } else {
        // get the current product quantity
      let currentQuantity = map.get(product);
      let updatedQuantity = +quantity + Number(currentQuantity);
      // add the product back to the Map
      map.set(product, updatedQuantity);
    }
  });

  // Iterate to print the products using .forEach()
  map.forEach((value, key) => {
    console.log(`${key} -> ${value}`);
  });
}

main(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
