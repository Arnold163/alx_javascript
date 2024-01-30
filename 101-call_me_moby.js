//call me mob
const { repeatFunction } = require('./repeatFunction');

function myFunction() {
    console.log("Executing the function!"); 
}

repeatFunction(5, myFunction);
