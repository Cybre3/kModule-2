function main(ownedTanks, numOfCommands, commands) {
    ownedTanks = ownedTanks.split(', ');
    commands.forEach((command) => {
        let [action, tankOrIndex, tank] = command.split(', ');
        let findTank = ownedTanks.indexOf(tankOrIndex);

        switch (action) {
            case 'Add':
                if (findTank >= 0 && tankOrIndex === ownedTanks[findTank]) {
                    console.log(`Tank is already bought`);
                } else {
                    console.log(`Tank successfully bought`);
                    ownedTanks.push(tankOrIndex);
                }
                break;
            case 'Remove':
                if (findTank >= 0) {
                    console.log(`Tank successfully sold`);
                    ownedTanks.splice(findTank, 1);
                } else {
                    console.log(`Tank not found`);
                }
                break;
            case 'Remove At':
                if (tankOrIndex >= 0 && tankOrIndex < ownedTanks.length) {
                    ownedTanks.splice(tankOrIndex, 1);
                    console.log(`Tank successfully sold`);
                } else {
                    console.log(`Tank not found`);
                }
                break;
            case 'Insert':
                if (tankOrIndex >= 0 && tankOrIndex < ownedTanks.length) {
                    if (findTank >= 0 && tank === ownedTanks[findTank]) {
                        console.log(`Tank is already bought`);
                    } else {
                        ownedTanks.splice(tankOrIndex, 0, tank);
                        console.log(`Tank successfully bought`);
                    }
                } else {
                    console.log(`Index out of range`);
                }
                break;

        }
    });
    console.log(ownedTanks.join(', '));
}

main(`T-34-85 Rudy, SU-100Y, STG`, 3, [
    `Add, King Tiger(C)`,
    `Insert, 2, IS-2M`,
    `Remove, T-34-85 Rudy`,
]);
main(`T 34, T 34 B, T92, AMX 13 57`, 4, [
    `Add, T 34`,
    `Remove, AMX CDC`,
    `Insert, 10, M60`,
    `Remove At, 1`,
]);
