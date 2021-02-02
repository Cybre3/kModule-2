let namesArr = [{ name: 'john' }, { name: 'Mike' }, { name: 'Susan' }];

// let index = namesArr.indexOf({ name: 'Mike' });
// console.log(index); // -1; not found, becuase name: mike is not a new reference

let index = namesArr.findIndex(a => a.name == 'Mike');
console.log(index); // 1