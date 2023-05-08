// Get form element and add event listener for form submission
const form = document.querySelector("#signup-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting and reloading the page

  // Get user input values
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  // Sanitize and validate user input
  const sanitizedEmail = DOMPurify.sanitize(email);
  const sanitizedPassword = DOMPurify.sanitize(password);

  if (!validateEmail(sanitizedEmail)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!validatePassword(sanitizedPassword)) {
    alert("Please enter a password with at least 6 characters.");
    return;
  }

  // Handle signup logic using Firebase Authentication API
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(`User ${user.email} signed up successfully`);
      // Clear form inputs
      form.reset();
      // Show success message to user
      alert("Signup successful! You can now log in.");
    })
    .catch((error) => {
      console.error(`Error signing up user: ${error.code} - ${error.message}`);
      // Display error message to user
      alert(error.message);
    });
});

// Validate email format
function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

// Validate password length
function validatePassword(password) {
  return password.length >= 6;
}
