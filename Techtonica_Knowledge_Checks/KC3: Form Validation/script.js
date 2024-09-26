// Makes success icons invisible
const successIcon = document.getElementsByClassName("far fa-check-circle success-icon")
for (let i = 0; i < successIcon.length; i++) {
  successIcon[i].style.visibility = "hidden"
}

// Access the failure icon
const failureIcon = document.getElementsByClassName("fas fa-exclamation-circle failure-icon")

// Valid email regex
const correctPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


// Activates click buton
document.getElementById('submit').addEventListener("click", (event) => {
  event.preventDefault();

  const userNameError = document.getElementsByClassName("error")[0]
  const emailError = document.getElementsByClassName("error")[1]
  const passwordError = document.getElementsByClassName("error")[2]

  //Changes the styles of the messages
  userNameError.style.color = "red"
  emailError.style.color = "red"
  passwordError.style.color = "red"

  //Grabs the inputs 
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  //Gives the error messages
  if (username === "") {
    userNameError.innerText = "Please enter this field"
  }

  if (email === "") {
    emailError.innerText = "Please enter this field"
  }

  if (password === "") {
    passwordError.innerText = "Please enter this field"
  }

  if (username !== "") {

    userNameError.innerText = ""
    successIcon[0].style.visibility = "visible" //Makes icon visible
    failureIcon[0].style.visibility = "hidden" //Makes icon invisible

    //Makes email valid
    if (correctPattern.test(email)) {
      emailError.innerText = ""
      successIcon[1].style.visibility = "visible" //Makes icon visible
      failureIcon[1].style.visibility = "hidden" //Makes icon invisible

    }
    else {
      emailError.innerText = "Please enter a valid email"

    }

    //Makes the password at least 8 letters
    if (password.length >= 8) {
      passwordError.innerText = "Please enter at least 8 letters"
    }
    else {
      passwordError.innerText = ""
      successIcon[2].style.visibility = "visible" //Makes icon visible
      failureIcon[2].style.visibility = "hidden" //Makes icon invisible
    }

  }
})