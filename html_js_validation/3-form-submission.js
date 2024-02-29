//form element get
const form = document.getElementById('submitForm');

//submission function
function handleFormSubmit(event) {
    event.preventDefault();

    //retrieve field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    //validate form fields
    if (name === '' || email === '') {
        //display error if required field empty
        alert('Please fill in all required fields');
    }else {
        //display success if validation pass
        alert('Form submitted succefully');   
    }
}
 //event listener for form sub
 form.addEventListener('submit', handleFormSubmit);
 