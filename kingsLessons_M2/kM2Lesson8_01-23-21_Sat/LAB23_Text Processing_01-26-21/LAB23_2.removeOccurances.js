function main(text, word) {
    
    while(word.includes(text)){
        word = word.replace(text, '');
    }
    console.log(word);
}

main('ice', 'kicegiciceeb');