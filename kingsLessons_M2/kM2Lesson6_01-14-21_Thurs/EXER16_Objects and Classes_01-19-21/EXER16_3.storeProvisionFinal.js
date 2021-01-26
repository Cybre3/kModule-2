class Product {
    constructor(product, qty) {
        this.product = product;
        this.qty = qty;
    }

    output() {
        console.log(`${this.product} -> ${this.qty}`);
    }
}

function main(inStoreItems, orderedItems) {
    let productsObj = [];

    for (let i in orderedItems) {
        i = Number(i);
        let orderedItem = orderedItems[i];
        let odrItemQty = Number(orderedItems[i + 1]);

        if (!inStoreItems.includes(orderedItems[i])) {
            if (i % 2 === 0) {
                inStoreItems.push(orderedItem, odrItemQty);
            }

        } else {
            let storeItemIndex = inStoreItems.indexOf(orderedItems[i]);
            let oldQuantity = Number(inStoreItems[storeItemIndex + 1]);
            inStoreItems.splice(
                storeItemIndex + 1,
                1,
                oldQuantity + odrItemQty
            );
        }
    }

    for (let index in inStoreItems) {
        index = Number(index);
        
        if (index % 2 === 0) {
            let inStoreName = inStoreItems[index];
            let inStoreQty = Number(inStoreItems[index + 1]);
            productsObj.push(new Product(inStoreName, inStoreQty));
        }
    }

    productsObj.forEach((productsObj) => productsObj.output());
}

main(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    [
        'Flour',
        '44',
        'Oil',
        '12',
        'Pasta',
        '7',
        'Tomatoes',
        '70',
        'Bananas',
        '30',
    ]
);
