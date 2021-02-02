function main(string) {
    let pattern = /\%(?<customerName>[A-Z][a-z]+)\%\<(?<product>\w+)\>(?<nothing>[^\.\$\%\|]*?)?\|(?<count>\d+)\|\3?(?<price>\d+\.?\d+?)\$/gm;
    let validOrder = pattern.exec(string);
    let totalIncome = 0;
    
    while (validOrder) {
        let totalPrice = validOrder.groups.count * validOrder.groups.price;
        console.log(
            `${validOrder.groups.customerName}: ${
                validOrder.groups.product
            } - ${totalPrice.toFixed(2)}`
        );
        totalIncome += totalPrice;
        validOrder = pattern.exec(string);
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

main(
    '%George%<Croissant>|2|10.3$, %Peter%<Gum>|1|1.3$, %Maria%<Cola>|1|2.4$, end of shift'
);
main(
    '%InvalidName%<Croissant>|2|10.3$, %Peter%<Gum>1.3$, %Maria%<Cola>|1|2.4, %Valid%<Valid>valid|10|valid20$, end of shift'
);
