//lori ipsim request d
const fs = require('fs');
const request = require('request');

function saveWebpageContent(url, filePath) {
    request(url, (error, response, body) => {
        if (error) {
            console.error('Error fetching webpage content:', error);
            process.exit(1);
        }
        if (response.statusCode !== 200) {
            console.error('Unexpected status code:', response.statusCode);
            process.exit(1);
        }
        fs.writeFile(filePath, body, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to file:', err);
                process.exit(1);
            }
            console.log(`Webpage content saved to ${filePath} successfully.`);
        });
    });
}

if (process.argv.length !== 4) {
    console.error('Usage: node script.js <URL> <file_path>');
    process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

saveWebpageContent(url, filePath);