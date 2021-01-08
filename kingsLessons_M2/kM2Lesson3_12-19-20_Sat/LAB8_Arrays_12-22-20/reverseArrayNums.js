function main(stringArr) {

    for (let leftSideArr = 0; leftSideArr < stringArr.length / 2; leftSideArr++) {
        let rightSideArr = stringArr.length - 1 - leftSideArr;
        swap(stringArr, leftSideArr, rightSideArr);
    }

    console.log(stringArr.join(' '));

    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

main(['a', 'b', 'c', 'd', 'e']);
main(['abc', 'def', 'hig', 'klm', 'nop']);
main(['33', '123', '0', 'dd']);