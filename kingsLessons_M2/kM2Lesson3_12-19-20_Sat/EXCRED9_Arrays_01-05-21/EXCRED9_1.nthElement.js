function main(stringNumArr) {
    let outputElements = [];
    let nStep = Number(stringNumArr[stringNumArr.length - 1]);

    for (let i = 0; i < stringNumArr.length - 1; i += nStep) {
        outputElements.push(stringNumArr[i]);
    }
    console.log(outputElements.join(' '));
}

main(['5','20','31','4','20','2']);
main(['dsa','asd','test','test','2']);
main(['1','2','3','4','5','6']);