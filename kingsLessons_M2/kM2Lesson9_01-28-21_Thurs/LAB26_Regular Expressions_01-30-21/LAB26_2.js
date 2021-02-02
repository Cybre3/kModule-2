function main(nums) {
    let pattern = /\+404(-| )\d{3}\1\d{4}\b/g;

    let matches = nums.match(pattern);
    console.log(matches.join(' '));
}

main('+404 222 2222,404-222-2222, +404/222/2222, +404-222 2222 +404 222-2222, +404-222-222, +404-222-22222 +404-222-2222');