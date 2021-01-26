class Hero {
    constructor(hName, hLevel, hItems){
        this.Hero = hName;
        this.level = hLevel;
        this.items = hItems;
    }

    output(){
        console.log(`Hero: ${this.Hero}\nlevel => ${this.level}\nitems => ${this.items}`);
    }
}

function main(heroInfoArr) {
    let heroInfo = [];
   
    heroInfoArr.forEach(hero => {
        let [heroName, level, items] = hero.split(' / ');
        items = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ');
        heroInfo.push(new Hero(heroName, level, items));  
    });

    heroInfo.sort((a, b) => a.level - b.level);
    heroInfo.forEach(heroInfo => heroInfo.output());
}


main([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara',
]);
