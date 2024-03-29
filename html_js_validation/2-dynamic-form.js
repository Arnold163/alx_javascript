document.addEventListener("DOMContentLoaded", function() {

document.getElementById('dynamicForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        this.submit();
    }
})

document.getElementById('numFields').addEventListener('change', function() {
    const numfields = parseInt(this.value);
    generateInputFields(numfields);
});

//generate input dynamically 
function generateInputFields(numfields) {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = '';

    for (let i = 1; i <= numfields; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = 'field' + i;
        inputContainer.appendChild(inputField);
        inputContainer.appendChild(document.createElement('br'));
    }
}

function validateForm() {
    const inputs = document.querySelectorAll('#inputContainer input');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            alert('please fill in all fields');
            return false;
        }
    }
    return true;
}
});