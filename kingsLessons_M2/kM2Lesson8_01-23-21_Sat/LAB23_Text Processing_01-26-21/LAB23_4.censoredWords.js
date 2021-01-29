function main(text, singleWord) {

    while(text.includes(singleWord)){
        text = text.replace(singleWord, repeat(singleWord));
    }

    console.log(text);
}

function repeat(word){
    return '*'.repeat(word.length);
}


main('A small sentence with some words', 'small');
