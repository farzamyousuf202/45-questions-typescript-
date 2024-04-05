// question no 31
// let users: string[] = []; 
// if (users.length > 0) {
//     console.log("Here are the usernames:");
//     users.forEach(user => {
//         console.log(user);
//     });
// } else {
//     console.log("We need to find some users!");
// }
// users = [];
// if (users.length > 0) {
//     console.log("Here are the usernames:");
//     users.forEach(user => {
//         console.log(user);
//     });
// } else {
//     console.log("We need to find some users!");
// }
// let current_users: string[] = ["john", "emma", "james", "sarah", "alex"];
// let new_users: string[] = ["emily", "James", "megan", "sarah", "chris"];
// function isUsernameTaken(username: string): boolean {
//     return current_users.some(user => user.toLowerCase() === username.toLowerCase());
// }
// new_users.forEach(username => {
//     if (isUsernameTaken(username)) {
//         console.log(`The username '${username}' is already taken. Please enter a new username.`);
//     } else {
//         console.log(`The username '${username}' is available.`);
//     }
// });
// question no 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var ordinalEnding;
    if (number === 1) {
        ordinalEnding = "st";
    }
    else if (number === 2) {
        ordinalEnding = "nd";
    }
    else if (number === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    console.log("".concat(number).concat(ordinalEnding));
});
// question no 34
