//lori
const fs = require('fs');
const https = require('https');

function saveWebpageContent(url, filePath) {
    https.get(url, (response) => {
        let data = '';

        response.on('data', (chunk) => {
            data += chunk;
        });

        response.on('end', () => {
            fs.writeFile(filePath, data, 'utf8', (err) => {
                if (err) {
                    console.error('Error writing to file:', err);
                    process.exit(1);
                }
                console.log(`Webpage content saved to ${filePath} successfully.`);
            });
        });
    }).on('error', (err) => {
        console.error('Error fetching webpage content:', err);
        process.exit(1);
    });
}

if (process.argv.length !== 4) {
    console.error('Usage: node script.js <URL> <file_path>');
    process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

saveWebpageContent(url, filePath);