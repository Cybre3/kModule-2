function main(movieCommandArr) {
    let movieArr = [];

    movieCommandArr.forEach((command) => {
        if (command.includes('addMovie')) {
            let [nothing, movieName] = command.split('addMovie ');
            movieArr.push({ name: movieName });

        } else {
            let [checkMovie, directorName] = command.split(' directedBy ');
            let [movieName, movieDate] = command.split(' onDate ');
            
            movieArr.forEach((movie, index) => {

                if (command.includes('directedBy') && movie.name === checkMovie) {
                    movieArr[index].director = directorName;
                } else if (command.includes('onDate') && movie.name === movieName) {
                    movieArr[index].date = movieDate;
                }
            });            
        }
    });

    movieArr.forEach((movie) => {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    });
}

main([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen',
]);
main([
    'addMovie TheLionKing(2019)',
    'addMovie Frozen',
    'TheLionKing(2019) directedBy Jon Favreau',
    'TheLionKing(2019) onDate 09.07.2019',
    'addMovie Minions',
    'Frozen directedBy Chris Buck, Jennifer Lee',
    'addMovie FindingNemo',
    'Frozen onDate 19.11.2013',
    'FindingNemo directedBy Andrew Stanton',
    'FindingNemo onDate 30.05.2003',
]);
