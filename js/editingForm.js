// Function to handle form submission
function submitForm(event) {
    event.preventDefault();

    // Get form input values
    const name = document.getElementById("name").value;
    const dateOfBirth = document.getElementById("dateOfBirth").value;
    const phoneNum = document.getElementById("phoneNum").value;
    const address = document.getElementById("address").value;

    // Create an object to store the form data
    const formData = {
        name,
        dateOfBirth,
        phoneNum,
        address
    };

    // Store the form data in localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Form data saved to localStorage.');
}

// Add form submit event listener to the form
const form = document.getElementById("editForm");
form.addEventListener("submit", submitForm);

// Handle the click event of the save button in the header
const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", function () {
    // Trigger the form submission when the save button is clicked
    form.submit();
});

// Retrieve and set placeholders from localStorage on page load (if needed)
const storedFormData = localStorage.getItem('formData');
if (storedFormData) {
    const formData = JSON.parse(storedFormData);
    document.getElementById("name").placeholder = formData.name;
    document.getElementById("dateOfBirth").placeholder = formData.dateOfBirth;
    document.getElementById("phoneNum").placeholder = formData.phoneNum;
    document.getElementById("address").placeholder = formData.address;
}
