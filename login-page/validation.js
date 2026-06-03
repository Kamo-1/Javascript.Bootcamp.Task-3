const form = document.getElementById("signupForm");
const successBanner = document.getElementById("successBanner");


function setError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const errorSpan = document.getElementById(errorId);
  input.classList.add("error");
  errorSpan.textContent = message;
}


function clearError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const errorSpan = document.getElementById(errorId);
  input.classList.remove("error");
  errorSpan.textContent = "";
}


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function (e) {
 
  e.preventDefault();

  let isValid = true;

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const terms = document.getElementById("terms").checked;

 
  clearError("username", "usernameError");
  clearError("email", "emailError");
  clearError("password", "passwordError");
  document.getElementById("termsError").textContent = "";

  
  if (username === "") {
    setError("username", "usernameError", "Username is required.");
    isValid = false;
  }

  
  if (email === "") {
    setError("email", "emailError", "Email address is required.");
    isValid = false;
  } else if (!emailPattern.test(email)) {
    setError("email", "emailError", "Please enter a valid email address.");
    isValid = false;
  }

 
  if (password === "") {
    setError("password", "passwordError", "Password is required.");
    isValid = false;
  } else if (password.length < 8) {
    setError("password", "passwordError", "Password must be at least 8 characters.");
    isValid = false;
  }

 
  if (!terms) {
    document.getElementById("termsError").textContent =
      "You must accept the Terms of Service to continue.";
    isValid = false;
  }

  
  if (isValid) {
    successBanner.classList.add("show");
    form.reset();
  }
});



const resendBtn = document.getElementById("resendBtn");
let countdown = 10;


const countdownInterval = setInterval(function () {
  countdown--;

  if (countdown > 0) {
    resendBtn.textContent = `Resend in ${countdown}s`;
  } else {
   
    clearInterval(countdownInterval);
    resendBtn.disabled = false;
    resendBtn.textContent = "Resend Verification Email";
  }
}, 3000);


resendBtn.addEventListener("click", function () {
  resendBtn.disabled = true;
  resendBtn.textContent = "Email sent! Please wait...";
});