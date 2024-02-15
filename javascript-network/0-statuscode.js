// status co
const request = require('request');

// Get the URL from command line arguments
const url = process.argv[2];

// Making the GET request
request.get(url, (error, response) => {
    if (error) {
        console.error('Error occurred:', error);
    } else {
        console.log(`code: ${response.statusCode}`);
    }
});