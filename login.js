// Initialize Firebase
const firebaseConfig = {
  // your firebase config
};
firebase.initializeApp(firebaseConfig);

// Get elements
const loginForm = document.getElementById("login-form");

// Add login event
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get user info
  const email = loginForm["email"].value;
  const password = loginForm["password"].value;

  // Sign in
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      // Redirect to main website page
      window.location.href = "index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
      // Display error message to user
      alert(errorMessage);
    });
});
