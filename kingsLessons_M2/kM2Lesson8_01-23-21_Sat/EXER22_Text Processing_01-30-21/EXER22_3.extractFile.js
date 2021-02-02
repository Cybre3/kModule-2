function main(string) {
    let extension = string.substr(string.lastIndexOf('.') + 1);
    let fileName = string.substring(string.lastIndexOf('\\') + 1, string.lastIndexOf('.'));

    console.log(`File name: ${fileName}\nFile extension: ${extension}`);
}

main('C:\\Internal\\training-internal\\template.bak.pptx');
