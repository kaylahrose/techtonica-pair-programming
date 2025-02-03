/*

Implement a simple program that demonstrates the creation and manipulation of Object Literals, Maps, and Sets. The program should include operations like adding elements, accessing values, and iterating over each collection type.




*/

// Step 1: Define an Object Literal Representing a Person
let person = {
    name: "Winnie",
    city: "Murfreesboro",
    food: "Pasta"
};

// Step 2: Create a Map to Store Additional Details About the Person
const personDetails = new Map([
    ['name', "Kaylah Rose"]
]);

personDetails.set('hobby', "weightLifting")

// let arr = [['name', "Kaylah Rose"]]
// const details = new Map(arr);

// Step 3: Create a Set to Store Unique Hobbies of the Person

let newSet = new Set()
console.log("new set", newSet)
newSet.add("Reading"); 
console.log("add reading", newSet)
let hobbies = new Set (["tennis","swimming","sleeping"])
console.log(hobbies)

