document.addEventListener("DOMContentLoaded", function() {
    //pass validation
    //pass validation function
    function validatePassword() {
        const passwordInput = document.getElementById("password").value;
        const errorElement = document.getElementById("error");

     //expressions to check pass strength criteria
        const minLength = 8;
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const digitRegex = /[0-9]/;
        const specialCharRegex = /[!@#$%&*]/;

    //check if pass meets all requirements 
     if (
            passwordInput.length >= minLength &&
            uppercaseRegex.test(passwordInput) &&
            lowercaseRegex.test(passwordInput) &&
            digitRegex.test(passwordInput) &&
            specialCharRegex.test(passwordInput)
     ){
            //pass meets requirements, allow form
         return true;
        }else {
         //not meet criteria, display error message
         errorElement.textContent = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character (!@#$%^&*)."
         return false;
        }
    }

    //event listener
    document.getElementById("passwordForm").addEventListener("submit", function(event) {
        if (!validatePassword()) {
         event.preventDefault();
        }
    });
}); 