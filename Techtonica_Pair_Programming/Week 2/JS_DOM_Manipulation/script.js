function isValidColor(string) {
  const validColor = new Option().style;
  validColor.color = string;
  return validColor.color === string.toLowerCase();
};

function colorPopUp() {
  let color = prompt("Please pick a color.");
  if (isValidColor(color)) {
    document.body.style.background = color;
  }
}

document.getElementById("element").addEventListener("mouseenter", () => {
  document.getElementById("element").textContent = "You're hovering over me!";
});

document.getElementById("element").addEventListener("mouseleave", () => {
  document.getElementById("element").textContent = "Hover Me";
});

// //This function return true o false if the color is valid - PLEASE DONT MODIFY
// function isValidColor(string) {
//   console.log("I am running!")
//   const validColor = new Option().style;
//   validColor.color = string;
//   return validColor.color === string.toLowerCase();
// };

// let color;
// color = window.prompt("What color would you like to change the background to?","Your color here");
// if (isValidColor(color)) {
//   element.style.background = color;
// } else {
//   window.alert("Sorry, this is not a color!");
// }



// // add event listeners
//   // select div element by id¸
// document.getElementById("element").addEventListener("mouseenter", function () {
//   document.getElementById("element").innerHTML = "I am hovering";
// });

// document.getElementById("element").addEventListener("mouseleave", function () {
//   document.getElementById("element").innerHTML = "I am hovering";
// });


  // create mouseenter event listener on Hover me
  // create mouseleave event listener on Hover me div

 // if they accept, prompt opens again

// ========== DO NOT MODIFY ABOVE FUNCTION ===========

// Event Listeners

// Color Prompt

// Use color prompt to change background color

// Add an event listener for the mouse enter

// Add an event listener for the mouse leave



