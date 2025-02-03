

/*
For Loop: Write a for loop that prints numbers from 1 to 5.
*/
for (let i = 1; i<=5; i++) {
    console.log(i);
}


/*
While Loop: Write a while loop that prints numbers from 1 to 5.
*/
let j = 1;
while (j<=5) {
    console.log(j);
    j++;
}


/*
Do-While Loop: Write a do...while loop that prints numbers from 1 to 5.
*/
let k = 1;
do {
    console.log(k);
    k++;
} while (k <=5);


/*
Switch Statement: Write a switch statement that performs different actions based on the input value:

- If the input is 'apple', output 'It's an apple.'
- If the input is 'banana', output 'It's a banana.'
- If the input is 'cherry', output 'It's a cherry.'
- Otherwise, output 'Unknown fruit.'

*/

function checkFruit(fruit) {
    switch (fruit) {
    case "apple":
        console.log("It's an apple");
        break;
    case "banana":
        console.log("It's a banana");
        break;
    case "cherry":
        console.log("It's a cherry");
        break;
    default:
        console.log("Unknown fruit");
    }
}

// checkFruit("apple");
// checkFruit("not a fruit");
// checkFruit("orange");
// checkFruit("cherry");

/*
forEach Loop: Write a forEach loop that iterates over an array of fruits and logs each one to the console.

*/

let fruits = ["apple", "orange", "cherry"];
fruits.forEach(function(fruit) {console.log(fruit);});
