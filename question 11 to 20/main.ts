// //question 11

// let names: string[] = ["farzam", "emraan", "alia", "pooja"];


// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }

// //question 12

// let names2: string[] = ["farzam", "emraan", "alia", "pooja"];
// let greetingMessage: string = "Hello, How are you? ";


// for (let i = 0; i < names2.length; i++) {
//     console.log(greetingMessage + names2[i] + "!");
// }

// //question 13


// const favoriteTransportation: string[] = [
//     "Honda motorcycle",
//     "Tesla Model S",
//     "BMW 5 Series",
//     "Toyota Prius",
//     "Vespa scooter"
//   ];
  
//   favoriteTransportation.forEach((transport) => {
//     console.log(`I would like to own a ${transport}.`);
//   });

  
// //question 14 


// const dinnerGuests3: string[] = [
//     "emraan",
//     "pooja",
//     "Rashmika"
//   ];
  
//   dinnerGuests3.forEach((guest) => {
//     console.log(`Dear ${guest},\n\nYou are cordially invited to dinner at my place. It would be an honor to have your presence and engage in enlightening conversations.\n\nLooking forward to your company,\n[Your Name]`);
//   });

// //question 15 

// let originalDinnerGuests2: string[] = [
//     "emraan",
//     "pooja",
//     "Rashmika"
//   ];
  
//   const guestWhoCantMakeIt: string = "kriti";
//   console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
  
//   const newGuest: string = "Alia";
//   originalDinnerGuests2 = originalDinnerGuests2.filter((guest) => guest !== guestWhoCantMakeIt);
//   originalDinnerGuests2.push(newGuest);
  
//   originalDinnerGuests2.forEach((guest) => {
//     console.log(`Dear ${guest},\n\nYou are cordially invited to dinner at my place. It would be an honor to have your presence and engage in enlightening conversations.\n\nLooking forward to your company,\n[Your Name]`);
//   });
  
  
  
//  //question 16

 
// let originalDinnerGuests1: string[] = [
//     "emraan",
//     "pooja",
//     "kriti"
//   ];
  
//   const guestWhoCantMakeIt1: string = "emraan";
//   console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
  
//   const newGuest1: string = "Rashmika";
//   originalDinnerGuests1 = originalDinnerGuests1.filter((guest) => guest !== guestWhoCantMakeIt);
//   originalDinnerGuests1.unshift("kareena"); 
//   originalDinnerGuests1.splice(Math.floor(originalDinnerGuests1.length / 2), 0, "Alia"); 
//   originalDinnerGuests1.push(newGuest1); 
  
 
//   console.log("Good news! We found a bigger dinner table.");
  
 
//   originalDinnerGuests1.forEach((guest) => {
//     console.log(`Dear ${guest},\n\nYou are cordially invited to dinner at my place. It would be an honor to have your presence and engage in enlightening conversations.\n\nLooking forward to your company,\n[farzam]`);
//   });
  
//  //question 17 


// let originalDinnerGuests5: string[] = [
//     "emraan",
//     "pooja",
//     "rashmika",
//     "kriti",
//     "Alia"
//   ];
  
//   console.log("Unfortunately, the new dinner table won't arrive in time for the dinner. We can only invite two people for dinner.");
  
//   while (originalDinnerGuests5.length > 2) {
//     const removedGuest = originalDinnerGuests5.pop();
//     console.log(`Sorry, ${removedGuest}, we won't be able to invite you to dinner.`);
//   }
  
//   originalDinnerGuests5.forEach((guest) => {
//     console.log(`Dear ${guest},\n\nYou are still cordially invited to dinner at my place. Despite the change in plans, it would be wonderful to have your company.\n\nLooking forward to your presence,\n[farzam]`);
//   });
  
//   originalDinnerGuests5.splice(0);
  
//   console.log("Updated list of dinner guests:", originalDinnerGuests5);
  

//  //question 18 

// let placesToVisit: string[] = [
//     "california",
//     "switzerland",
//     "melbourne",
//     "london",
//     "Germany"
//   ];
  
//   console.log("Original order:", placesToVisit);
  
//   console.log("Alphabetical order:", [...placesToVisit].sort());
  
//   console.log("Original order after sorting:", placesToVisit);
  
//   console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());
  

//   console.log("Original order after sorting in reverse:", placesToVisit);
  

//   placesToVisit.reverse();
//   console.log("Reversed order:", placesToVisit);
  
//   placesToVisit.reverse();
//   console.log("Original order after reversing again:", placesToVisit);
  
//   placesToVisit.sort();
//   console.log("Sorted in alphabetical order:", placesToVisit);
  
//   placesToVisit.sort((a, b) => b.localeCompare(a));
//   console.log("Sorted in reverse alphabetical order:", placesToVisit);

//    //question 19 
  
// const originalDinnerGuests4: string[] = [
//     "Emraan",
//     "Pooja",
//     "Rashmika"
//   ];
  
//   console.log(`You are inviting ${originalDinnerGuests4.length} people to dinner.`);
  
//   const guestWhoCantMakeIts4: string = "Alia";
//   console.log(`${guestWhoCantMakeIt} can't make it to the dinner.`);
  

//   const newGuests: string = "kriti";
//   const updatedDinnerGuestss: string[] = originalDinnerGuests4.filter((guest) => guest !== guestWhoCantMakeIt);
//   updatedDinnerGuestss.push(newGuests);

//   console.log("Good news! We found a bigger dinner table.");
  
//   updatedDinnerGuestss.forEach((guest) => {
//     console.log(`Dear ${guest},\n\nYou are cordially invited to dinner at my place. It would be an honor to have your presence and engage in enlightening conversations.\n\nLooking forward to your company,\n[farzam]`);
//   });
  

  // question 20 
  
 
const landmarks: string[] = [
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
  
  
  console.log("List of Famous Landmarks:");
  landmarks.forEach((landmark, index) => {
    console.log(`${index + 1}. ${landmark}`);
  });
  