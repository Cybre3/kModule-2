let str = 'I am Javascript developer';

// let index = str.indexOf('a');
let index = str.indexOf('z');
let lastIndex = str.lastIndexOf('a');

if (index == -1){
    console.log('Not found');
} else {
    console.log(lastIndex);
}


let charA = [];
let strArr = str.split('');
strArr.forEach((item, index) => {
    if(item == 'a') {charA.push(index);}
});
console.log(`${charA.length} a found`);