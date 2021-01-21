class product {
    constructor(product, qty) {
        this.product = product;
        this.qty = qty;
    }
}

function main(inStoreItems, orderedItems) {
    // let products = {};

    let productsArr = [];
    let qtys = [];
    for (let i = 0; i < orderedItems.length; i++) {
        if (i % 2 === 0) {
            productsArr.push([orderedItems[i] + ' ' + orderedItems[i + 1]]);
        }
    }
    
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
