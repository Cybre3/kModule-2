function main(string) {

    for(let ch of string){
        console.log(ch);
    }
}

function solve(str){
    // let strArr = Array.from(str);
    let strArr = str.split(''); // ['A', 'w', 'o', 'r', 'd']
    strArr.forEach(ch => console.log(ch));
}

main('AWord');
solve('AWord');
