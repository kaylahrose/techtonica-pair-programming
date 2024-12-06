/*

Task 1
Add a property to each friend storing their initials and calculates the sum of all ages to use in calculation of average age. An average is the total of Ages divide for how many friends 

Task 2
Gets an array of all friends older than the average age

Task 3
Gets an array of strings listing the initials and age
Expected output: [ 'AB: 35', 'SW: 45', 'AE: 38', 'IH: 46' ]

Bonus
How you can work in this programmatically (using a function)

*/


// A list of friends stored as an array of objects
const myFriends = [
    { firstname: 'Isma', lastname: 'Kirby', age: 27 },
    { firstname: 'Aaliya', lastname: 'Becker', age: 35 },
    { firstname: 'Adnaan', lastname: 'Tang', age: 22 },
    { firstname: 'Rafi', lastname: 'Pearson', age: 29 },
    { firstname: 'Eshaal', lastname: 'Gould', age: 29 },
    { firstname: 'Scarlett', lastname: 'Whitehead', age: 45 },
    { firstname: 'Arslan', lastname: 'Esparza', age: 38 },
    { firstname: 'Isla-Mae', lastname: 'Hastings', age: 46 },
    { firstname: 'Eamonn', lastname: 'Vang', age: 21 },
    { firstname: 'Haya', lastname: 'Mcdougall', age: 31 },
];

/*
Calculate the Average Age: First, we need to calculate the average age of all friends. This involves summing up all the ages and dividing by the number of friends.
Add Initials Property: Next, we'll add a property to each friend object that stores their initials. This requires taking the first letter of each name part (first and last names).
Filter Friends Older Than Average Age: We'll create a function to filter out friends who are older than the calculated average age.
List Initials and Age: Finally, we'll format a list of strings showing each friend's initials and age.
Let's implement these steps in code:*/

// Step 1: Add Initials Property
// We'll map over the myFriends array to add an initials property to each friend object.

const friendsWithInitials = myFriends.map(friend => ({
    ...friend,
    initials: `${friend.firstname[0]}${friend.lastname[0]}`,
}));


// Step 2: Calculate the Average Age

// Calculate average age
const totalAge = myFriends.reduce((sum, friend) => sum + friend.age, 0);
const avgAge = totalAge / myFriends.length;



// Step 3: Filter Friends Older Than Average Age
// Now, we'll create a function to filter friends based on their age compared to the average.

function getOlderThanAverage() {
    return friendsWithInitials.filter(friend => friend.age > avgAge);
}


// Step 4: List Initials and Age
// Finally, we'll format a list of strings showing each friend's initials and age.

function listInitialsWithAge() {
    return getOlderThanAverage().map(friend => `${friend.initials}: ${friend.age}`);
}

// console.log(listInitialsWithAge()); // Expected output: 'AB: 35, SW: 45, AE: 38, IH: 46'


/*Explanation
Calculating Average Age: We use the reduce method to sum up all ages and then divide by the number of friends to get the average.
Adding Initials: By mapping over the array, we add a new property initials to each friend object, combining the first letters of their first and last names.
Filtering Friends: The getOlderThanAverage function filters the array of friends to only those whose age is greater than the average age.
Listing Initials and Age: The listInitialsWithAge function formats the filtered list of friends into a string, displaying each friend's initials and age.
*/

