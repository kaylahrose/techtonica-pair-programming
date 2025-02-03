// select password input
const password = document.getElementById("password").innerText
console.log("password", password)
// run through validation function

// check length min and max
// string manipulation methods

document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Clear previous errors
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    emailError.textContent = '';
    passwordError.textContent = '';
  
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    let isValid = true;
  
    // Validate email
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email.value)) {
      email.classList.add('invalid');
      emailError.textContent = 'Please enter a valid email.';
      emailError.style.display = 'block';
      isValid = false;
    } else {
      email.classList.remove('invalid');
    }
  
    // Validate password length
    if (password.value.length < 6) {
      password.classList.add('invalid');
      passwordError.textContent = 'Password must be at least 6 characters.';
      passwordError.style.display = 'block';
      isValid = false;
    } else {
      password.classList.remove('invalid');
    }
  
    if (isValid) {
      alert('Form submitted successfully!');
    }
  });
  