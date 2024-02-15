//star wars wedge
const request = require('request');

const apiUrl = process.argv[2];

const characterId = 18;

//get request to fetch 
request.get(apiUrl, (error, response, body) => {
    if (error) {
        console.error('Error occurred', error);
    }else {
        const filmsData = JSON.parse(body);

        const filmsWithWedgeAntilles = filmsData.results.filter(film => {
            return film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`);
        });

        //print
        console.log(filmsWithWedgeAntilles.length);
    }
});