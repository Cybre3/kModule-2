function main(name, area, population, country, postCode) {
  let city = {
    name: name,
    area: area,
    population: population,
    country: country,
    postCode: postCode,
  };

  // for(let info in city) {
  //     console.log(`${info} -> ${city[info]}`);
  // }

  let cityInfo = Object.entries(city);

  cityInfo.forEach((entry) => {
    console.log(`${entry[0]} -> ${entry[1]}`);
  });
}

main('Atlanta', '343', '416474', 'USA', '404');
