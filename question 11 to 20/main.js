"use strict";
// question 11
// let names: string[] = ["farzam", "emraan", "alia", "pooja"];
// // Printing each person's name one at a time
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
//question 12
// let names2: string[] = ["farzam", "emraan", "alia", "pooja"];
// let greetingMessage: string = "Hello, How are you? ";
// // Printing personalized messages to each person
// for (let i = 0; i < names2.length; i++) {
//     console.log(greetingMessage + names2[i] + "!");
// }
//question 13
// Define an array of favorite modes of transportation
// const favoriteTransportation: string[] = [
//     "Honda motorcycle",
//     "Tesla Model S",
//     "BMW 5 Series",
//     "Toyota Prius",
//     "Vespa scooter"
//   ];
//   // Print statements about each item in the array
//   favoriteTransportation.forEach((transport) => {
//     console.log(`I would like to own a ${transport}.`);
//   });
//question 14 
// Define an array of people to invite to dinner
// const dinnerGuests: string[] = [
//     "emraan",
//     "pooja",
//     "Rashmika"
//   ];
//   // Invite each person to dinner
//   dinnerGuests.forEach((guest) => {
//     console.log(`Dear ${guest},\n\nYou are cordially invited to dinner at my place. It would be an honor to have your presence and engage in enlightening conversations.\n\nLooking forward to your company,\n[Your Name]`);
//   });
//question 15 
// Define an array of original dinner guests
// Define an array of original dinner guests
// let originalDinnerGuests: string[] = [
//     "emraan",
//     "pooja",
//     "Rashmika"
//   ];
//   // Print the name of the guest who can't make it
//   const guestWhoCantMakeIt: string = "kriti";
//   console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
//   // Remove the guest who can't make it and add the new guest
//   const newGuest: string = "Alia";
//   originalDinnerGuests = originalDinnerGuests.filter((guest) => guest !== guestWhoCantMakeIt);
//   originalDinnerGuests.push(newGuest);
//   // Send out invitations to the updated list of guests
//   originalDinnerGuests.forEach((guest) => {
//     console.log(`Dear ${guest},\n\nYou are cordially invited to dinner at my place. It would be an honor to have your presence and engage in enlightening conversations.\n\nLooking forward to your company,\n[Your Name]`);
//   });
// question 16
// Define an array of original dinner guests
// let originalDinnerGuests: string[] = [
//     "emraan",
//     "pooja",
//     "kriti"
//   ];
//   // Print the name of the guest who can't make it
//   const guestWhoCantMakeIt: string = "emraan";
//   console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
//   // Remove the guest who can't make it and add the new guest
//   const newGuest: string = "Rashmika";
//   originalDinnerGuests = originalDinnerGuests.filter((guest) => guest !== guestWhoCantMakeIt);
//   originalDinnerGuests.unshift("kareena"); // Add new guest to the beginning
//   originalDinnerGuests.splice(Math.floor(originalDinnerGuests.length / 2), 0, "Alia"); // Add new guest to the middle
//   originalDinnerGuests.push(newGuest); // Add new guest to the end
//   // Print a statement about the bigger dinner table
//   console.log("Good news! We found a bigger dinner table.");
//   // Send out invitations to the updated list of guests
//   originalDinnerGuests.forEach((guest) => {
//     console.log(`Dear ${guest},\n\nYou are cordially invited to dinner at my place. It would be an honor to have your presence and engage in enlightening conversations.\n\nLooking forward to your company,\n[farzam]`);
//   });
// question 17 
// Define an array of original dinner guests
// let originalDinnerGuests: string[] = [
//     "emraan",
//     "pooja",
//     "rashmika",
//     "kriti",
//     "Alia"
//   ];
//   // Print a statement about the bigger dinner table
//   console.log("Unfortunately, the new dinner table won't arrive in time for the dinner. We can only invite two people for dinner.");
//   // Remove guests from the list until only two names remain
//   while (originalDinnerGuests.length > 2) {
//     const removedGuest = originalDinnerGuests.pop();
//     console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
//   }
//   // Send invitation to the remaining two guests
//   originalDinnerGuests.forEach((guest) => {
//     console.log(`Dear ${guest},\n\nYou are still cordially invited to dinner at my place. Despite the change in plans, it would be wonderful to have your company.\n\nLooking forward to your presence,\n[farzam]`);
//   });
//   // Remove the last two names from the list
//   originalDinnerGuests.splice(0);
//   // Print the list to ensure it's empty
//   console.log("Updated list of dinner guests:", originalDinnerGuests);
// question 18 
// Define an array of places to visit
// let placesToVisit: string[] = [
//     "california",
//     "switzerland",
//     "melbourne",
//     "london",
//     "Germany"
//   ];
//   // Print the array in its original order
//   console.log("Original order:", placesToVisit);
//   // Print the array in alphabetical order without modifying the actual list
//   console.log("Alphabetical order:", [...placesToVisit].sort());
//   // Print the array in its original order to show it's unchanged
//   console.log("Original order after sorting:", placesToVisit);
//   // Print the array in reverse alphabetical order without changing the order of the original list
//   console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
//   // Print the array in its original order to show it's unchanged
//   console.log("Original order after sorting in reverse:", placesToVisit);
//   // Reverse the order of the list
//   placesToVisit.reverse();
//   console.log("Reversed order:", placesToVisit);
//   // Reverse the order of the list again to get back to the original order
//   placesToVisit.reverse();
//   console.log("Original order after reversing again:", placesToVisit);
//   // Sort the array in alphabetical order
//   placesToVisit.sort();
//   console.log("Sorted in alphabetical order:", placesToVisit);
//   // Sort the array in reverse alphabetical order
//   placesToVisit.sort((a, b) => b.localeCompare(a));
//   console.log("Sorted in reverse alphabetical order:", placesToVisit);
// question 19 
// Define an array of original dinner guests
// const originalDinnerGuests: string[] = [
//     "Emraan",
//     "Pooja",
//     "Rashmika"
//   ];
//   // Print the number of people being invited to dinner
//   console.log(`You are inviting ${originalDinnerGuests.length} people to dinner.`);
//   // Print the name of the guest who can't make it
//   const guestWhoCantMakeIt: string = "Alia";
//   console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
//   // Remove the guest who can't make it and add the new guest
//   const newGuest: string = "kriti";
//   const updatedDinnerGuests: string[] = originalDinnerGuests.filter((guest) => guest !== guestWhoCantMakeIt);
//   updatedDinnerGuests.push(newGuest);
//   // Print a statement about the bigger dinner table
//   console.log("Good news! We found a bigger dinner table.");
//   // Send out invitations to the updated list of guests
//   updatedDinnerGuests.forEach((guest) => {
//     console.log(`Dear ${guest},\n\nYou are cordially invited to dinner at my place. It would be an honor to have your presence and engage in enlightening conversations.\n\nLooking forward to your company,\n[farzam]`);
//   });
// question 20 
// Define an array of famous landmarks
const landmarks = [
    "Eiffel Tower",
    "Great Wall of China",
    "Statue of Liberty",
    "Taj Mahal",
    "Machu Picchu",
    "Sydney Opera House",
    "Petra",
    "Colosseum",
    "Christ the Redeemer",
    "Pyramids of Giza"
];
// Print the array of landmarks
console.log("List of Famous Landmarks:");
landmarks.forEach((landmark, index) => {
    console.log(`${index + 1}. ${landmark}`);
});
