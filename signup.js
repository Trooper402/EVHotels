// Get form element and add event listener for form submission
const form = document.querySelector("#signup-form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting and reloading the page

  // Get user input values
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  // Sanitize email input
  const sanitizedEmail = DOMPurify.sanitize(email);

  // Validate email input
  if (!validateEmail(sanitizedEmail)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Sanitize password input
  const sanitizedPassword = DOMPurify.sanitize(password);

  // Validate password input
  if (!validatePassword(sanitizedPassword)) {
    alert("Please enter a password with at least 6 characters.");
    return;
  }

  // TODO: handle signup logic using Firebase Authentication API
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
firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User sign-up successful, get the user object
    const user = userCredential.user;
    console.log(`User ${user.email} signed up successfully`);
  })
  .catch((error) => {
    console.error(`Error signing up user: ${error.code} - ${error.message}`);
  });
