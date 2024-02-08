//star wars movie title

const request = require('request');

function getMovieTitle(movieId) {
    const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

    request(url, (error, response, body) => {
        if(error) {
            console.error("Error:", error);
            return;
        }
        if (response.statusCode !== 200) {
            console.error("Failed to retrieve movie data. Status Code:", response.statusCode);
            return;
        }

        const movieData = JSON.parse(body);
        console.log(movieData.getMovietitle);
    });
}

function main() {
    if (Process.argv.length !== 3) {
        console.log("Usage: node script.js <movie_id>");
        return;
    }

    const movieId = Process.argv[2];
    getMovieTitle(movieId);

    main();
}