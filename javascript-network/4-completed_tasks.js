//how many completed
const request = require('request');

function countCompletedTasks(apiUrl) {
    request(apiUrl, (error, response, body) => {
        if (error) {
            console.error('Error fetching data:', error);
            process.exit(1);
        }
        
        if (response.statusCode !== 200) {
            console.error('Unexpected status code:', response.statusCode);
            process.exit(1);
        }

        const todos = JSON.parse(body);
        const completedTasksByUser = {};

        todos.forEach(todo => {
            if (todo.completed) {
                if (!completedTasksByUser[todo.userId]) {
                    completedTasksByUser[todo.userId] = 1;
                } else {
                    completedTasksByUser[todo.userId]++;
                }
            }
        });

        console.log(completedTasksByUser);
    });
}

if (process.argv.length !== 3) {
    console.error('Usage: node script.js <API_URL>');
    process.exit(1);
}

const apiUrl = process.argv[2];

countCompletedTasks(apiUrl);