function main(string) {

    // for(let ch of string){
    //     console.log(ch);
    // }
    string.split('').forEach(ch => console.log(ch));
}

main('AWord');