//lets see what this gone show
function welcomeMessage() {
    return function(fullName) {
        alert("Welcome " + fullName);
    }
}

var guillaume = welcomeMessage();
var alex = welcomeMessage();
var fred = welcomeMessage();

guillaume("Guillaume");
alex("Alex");
fred("Fred");