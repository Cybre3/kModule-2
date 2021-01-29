function main(storeArr) {
    // Creat empty Map
    let storage = new Map();

    // Iterate through input array to store key/value in Map
    for (let item of storeArr) {
        let [product, quantity] = item.split(' ');
        quantity = Number(quantity);

        // If map does not have item - key
        // add item to map
        if (!storage.has(product)) {
            storage.set(product, quantity);
        } else {
            // if already exists
            // Get old quantity
            let oldQuantity = storage.get(product);
            let updateQuantity = oldQuantity + quantity;
            storage.set(product, updateQuantity);
            // storage.set(product, storage.get(product) + quantity);
        }
    }

    // Iterate to print map keys/values
    for (let [key, value] of storage) {
        console.log(`${key} -> ${value}`);
    }
}

main(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40']);
