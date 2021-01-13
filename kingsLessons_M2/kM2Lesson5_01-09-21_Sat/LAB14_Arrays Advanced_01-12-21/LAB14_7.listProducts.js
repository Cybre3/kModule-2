// let items = (itemsArr) => {
//     let sortedItems = itemsArr.sort();
//     let nums = [1, 2, 3, 4];
//     let index = 0;
//     let orderedItems = nums[index] + sortedItems[index];
//     return orderedItems;
// };

// function main(inputItemsArr) {
//     let orderedItems = items(inputItemsArr);
//     console.log(orderedItems.join('.'));
// }

main(["Potatoes", "Tomatoes", "Onions", "Apples"]);

function main(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    arr.forEach((value, index) => {
        console.log(`${index + 1}.${value}`);
    });
}
arr.forEach();