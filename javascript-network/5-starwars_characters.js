//who playin
const request = require('request');

function printMovieCharacters(movieId) {
    const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

    request(apiUrl, (error, response, body) => {
        if (error) {
            console.error('Error fetching data:', error);
            process.exit(1);
        }
        
        if (response.statusCode !== 200) {
            console.error('Unexpected status code:', response.statusCode);
            process.exit(1);
        }

        const filmData = JSON.parse(body);
        const charactersUrls = filmData.characters;

        charactersUrls.forEach(characterUrl => {
            request(characterUrl, (error, response, body) => {
                if (error) {
                    console.error('Error fetching data:', error);
                    process.exit(1);
                }
                
                if (response.statusCode !== 200) {
                    console.error('Unexpected status code:', response.statusCode);
                    process.exit(1);
                }

                const characterData = JSON.parse(body);
                console.log(characterData.name);
            });
        });
    });
}

if (process.argv.length !== 3) {
    console.error('Usage: node script.js <Movie_ID>');
    process.exit(1);
}

const movieId = process.argv[2];

printMovieCharacters(movieId);