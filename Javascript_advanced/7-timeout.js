//stack order and set timeout
// Log to the console 
console.log("Start of the execution queue");

// a loop that iterates 100 times
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Log to the console End of the loop printing
console.log("End of the loop printing");

// Log to the console Final code block to be executed
setTimeout(function() {
    console.log("Final code block to be executed");
}, 0);