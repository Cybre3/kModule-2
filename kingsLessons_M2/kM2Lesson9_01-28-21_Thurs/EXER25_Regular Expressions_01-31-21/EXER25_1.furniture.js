function main(furniture) {

    let pattern = />>(?<item>[A-Za-z][A-Za-z]+)<<(?<price>(\d+)?\.?\d+)\!(?<quantity>\d+)\b/gi;
    let total = 0;
    let boughtFurniture = [];
    let furn = pattern.exec(furniture);
    while(furn){
        boughtFurniture.push(furn.groups.item);
        let furnTotalPrice = furn.groups.price * furn.groups.quantity;
        total += furnTotalPrice;
        furn = pattern.exec(furniture);
    }
    console.log(`Bought furniture:\n${boughtFurniture.join('\n')}\nTotal money spend: ${total.toFixed(2)}`);
}

main('>>Sofa<<312.23!3 >>TV<<300!5 >Invalid<<!5Purchase');