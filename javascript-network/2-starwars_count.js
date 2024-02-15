//starwarswig
const request = require('request');

const apiUrl = process.argv[2];

const characterId = 18;

//get request to fetch 
request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error occurred:', error);
    } else {
        const filmsData = JSON.parse(body);

        // Check if filmsData.results exists before accessing it
        if (filmsData.results) {
            // Filter films where Wedge Antilles is present
            const filmsWithWedgeAntilles = filmsData.results.filter(film => {
                return film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
            });

            // Print the number of films with Wedge Antilles
            console.log(filmsWithWedgeAntilles.length);
        } else {
            console.error('No films data found.');
        }
    }
});