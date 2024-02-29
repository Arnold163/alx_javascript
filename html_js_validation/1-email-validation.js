document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = document.getElementById('email').value;

    if (!validateEmail(emailInput)) {
        document.getElementById('error').textContent = "Please enter a valid email address.";

    }else {
        document.getElementById('error').textContent = "";
        this.submit();

    }
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
