// use isValidColor function to determine if string is valid color
function isValidColor(str) {
  const validColor = new Option().style;
  validColor.color = str;
  return validColor.color === str.toLowerCase()
}

// ask user to input text color
let userInputText = prompt("What text color do you want", 'black')
console.log(userInputText)

// ask user to input background color
let userInputBackground = prompt("What background color do you want", "white");
console.log(userInputBackground);


// check if valid colors, and change colors or ask prompt again
if (isValidColor(userInputBackground) && isValidColor(userInputText)){
  document.body.style.backgroundColor = userInputBackground
  document.body.style.color = userInputText
} else {
  prompt('PLEASE ENTER VALID COLORS')

}