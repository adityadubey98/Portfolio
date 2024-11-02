function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('phone').value.trim();;
    const message = document.getElementById('message').value.trim();
    const errorElement = document.getElementById('error');

    if (!name || !email || !number || !message) {
        errorElement.textContent = "All fields are required.";
        return false;
    }

    // Check if email is in the correct format
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        errorElement.textContent = "Please enter a valid email address.";
        return false;
    }

    errorElement.textContent = ""; // Clear any previous error message
    alert("Form submitted successfully!");
    return true; // Submit form
}
