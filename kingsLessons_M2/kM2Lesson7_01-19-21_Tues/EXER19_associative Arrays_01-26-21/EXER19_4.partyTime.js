function main(partyArr) {
    let unattendedGuest = new Map();
    partyArr.forEach(guest => {
        let digit1 = guest.split('')[0];
        let vipStatus = !isNaN(digit1) ? 1 : 2;
        // if(!isNaN(digit1)){
        //     status = 'VIP';
        // } else {
        //     status = 'regular';
        // }
        if(!unattendedGuest.has(guest)){
            unattendedGuest.set(guest, vipStatus);
        } else {
            unattendedGuest.delete(guest, vipStatus);
        }
    }); 
    unattendedGuest.delete('PARTY');
    let sortedUnattendList = Array.from(unattendedGuest);
    sortedUnattendList.sort((a, b) => a[1] - b[1]);
    console.log(sortedUnattendList.length);
    sortedUnattendList.forEach(missingGuest => console.log(missingGuest[0]));
}

main(['7IK9Yo0h','9NoBUajQ','Ce8vwPmE','SVQXQCbc','tSzE5t0p','PARTY','9NoBUajQ','Ce8vwPmE','SVQXQCbc']);