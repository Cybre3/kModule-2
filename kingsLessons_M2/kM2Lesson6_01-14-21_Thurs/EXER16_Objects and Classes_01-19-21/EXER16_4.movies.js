class Movie {
    constructor(movieName, director, movieDate) {
        this.movieName = movieName;
        this.director = director;
        this.movieDate = movieDate;
    }
}

function main(movieCommandArr) {
    let movieArr = [];

    movieCommandArr.forEach((command) => {
        let movieInfo = {};
        if (command.includes('addMovie')) {
            let [nothing, movie] = command.split('addMovie ');
            movieArr.push(movie);
        } else {
            movieCommandArr.filter((director) => {
                let [checkMovie, directorName] = director.split(' directedBy ');
                let [movieName, date] = director.split(' onDate ');
                director.includes('directedBy');
            });
        }
        // if (command.includes('onDate')) {
        //     let [movie, date] = command.split(' onDate ');
        //     movieInfo.date = date;
        // }
    });
    // console.log(movieArr);
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
