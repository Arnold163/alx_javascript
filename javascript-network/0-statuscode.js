//status code

const https = require('https');

if (process.argv.length !== 3) {
    console.log('usage: node 0-statuscode.js <URL>');
    process.exit(1);
}

const url = process.argv[2];

if (!url.startsWith('https://')) {
    console.log('Error: URL must start with "https://"');
    process.exit(1);
}

https.get(url, (res) =>  {
    console.log(`code: ${res.statusCode}`);
}).on('error', (err) => {
    console.error(`Error: ${err.message}`);
});