function main(stringsArr) {
    stringsArr.forEach((setOfInfo) => {
        setOfInfo = setOfInfo.split(' | ');
        let [town, latitude, longitude] = setOfInfo;
        let townInfo = {
            town,
            latitude: (+latitude).toFixed(2),
            longitude: (+longitude).toFixed(2),
        };

        console.log(townInfo);
    });
}

main(['Atlanta | 33.753746 | -84.386330', 'Beijing | 39.913818 | 116.363625']);
