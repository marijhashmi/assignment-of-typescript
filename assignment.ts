//Question 1.
//Install Node.js, TypeScript and VS Code on my computer.
//Question 2.
let personName: string = "Eric";
console.log(`Hello ${personName}, would you like to learn some Python today?`);
//Question 3.
let personname: string = "Eric";
console.log(`Lowercase: ${personName.toLowerCase()}`);
console.log(`Uppercase: ${personName.toUpperCase()}`);
console.log(`Titlecase: ${personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()}`);
//Question 4.
let famousQuote: string = 'A person who never made a mistake never tried anything new.';
let author: string = 'Albert Einstein';
console.log(`${author} once said, "${famousQuote}"`);
//Question 5.
let famousPerson: string = 'Albert Einstein';
let message: string = `${famousPerson} once said, "A person who never made a mistake never tried anything new."`;
console.log(message);
//Question 6.
const PersonName: string = "\t\n   Eric   \n\t";
console.log(`Name with whitespace: "${personName}"`);
console.log(`Name after stripping whitespace: "${personName.trim()}"`);
//Question 7.
console.log(5 + 3); // Addition
console.log(16 - 8); // Subtraction
console.log(2 * 4); // Multiplication
console.log(16 / 2); // Division
//Question 8.
console.log(5+3);
console.log(2+6);
console.log(15-7);
console.log(12-4);
//Question 9.
let favoriteNumber: number = 42;
console.log(`My favorite number is ${favoriteNumber}.`);
//Question 10.
//Adding comments
console.log("Adding comments");
//Question 11.
const names: string[] = ["Alice", "Bob", "Charlie", "David"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//Question 12.
const name1: string[] = ["Alice", "Bob", "Charlie", "David"];
const msg = "Hello, ";
console.log(`${msg}${name1[0]}`);
console.log(`${msg}${name1[1]}`);
console.log(`${msg}${name1[2]}`);
console.log(`${msg}${name1[3]}`);
//Question 13.
const transportation: string[] = ["car", "motorcycle", "bicycle", "scooter"];
  console.log(`I would like to own a ${transportation[0]}.`);
  console.log(`I would like to own a ${transportation[1]}.`);
  console.log(`I would like to own a ${transportation[2]}.`);
  console.log(`I would like to own a ${transportation[3]}.`);
  //Question 14.
  let dinnerGuests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
   console.log(`Dear ${dinnerGuests[0]}, you are invited to dinner. Please join us.`);
   console.log(`Dear ${dinnerGuests[1]}, you are invited to dinner. Please join us.`);
   console.log(`Dear ${dinnerGuests[2]}, you are invited to dinner. Please join us.`);
 //Question 15.
 let DinnerGuests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
let guestWhoCantMakeIt = "Albert Einstein";
let newGuest = "Isaac Newton";
console.log(`${guestWhoCantMakeIt} can't make it to dinner.`);

const index = DinnerGuests.indexOf(guestWhoCantMakeIt);
if (index !== -1) {
  DinnerGuests[index] = newGuest;
}
console.log(`Dear ${DinnerGuests[0]}, you are invited to dinner. Please join us.`);
console.log(`Dear ${DinnerGuests[1]}, you are invited to dinner. Please join us.`);
console.log(`Dear ${DinnerGuests[2]}, you are invited to dinner. Please join us.`);

 //Question 16.
 let dinnerguests: string[] = ["Marie Curie", "Leonardo da Vinci"];
console.log("We found a bigger dinner table.");

dinnerGuests.unshift("Isaac Newton"); // Add to the beginning
dinnerGuests.splice(2, 0, "Nikola Tesla"); // Add to the middle
dinnerGuests.push("Stephen Hawking"); // Add to the end
console.log(`Dear ${DinnerGuests[0]}, you are invited to dinner. Please join us.`);
console.log(`Dear ${DinnerGuests[1]}, you are invited to dinner. Please join us.`);
console.log(`Dear ${DinnerGuests[2]}, you are invited to dinner. Please join us.`);
console.log(`Dear ${DinnerGuests[3]}, you are invited to dinner. Please join us.`);
console.log(`Dear ${DinnerGuests[4]}, you are invited to dinner. Please join us.`);

 //Question 17.
 const dinnerGuest: string[] = ["Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Nikola Tesla", "Stephen Hawking"];
 console.log("The new dinner table won't arrive in time, and we can only invite two people for dinner.");
 
 
   const removedGuest = dinnerGuest.pop();
   console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
   console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
   console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);

   console.log(`Dear ${dinnerGuest[0]}, you are still invited to dinner. Please join us.`);
   console.log(`Dear ${dinnerGuest[1]}, you are still invited to dinner. Please join us.`); 
 
 dinnerGuests.length = 0; // Empty the list
 console.log("The guest list is now empty.");
 //Question 18.
 let placesToVisit: string[] = ["Paris", "Tokyo", "Venice", "New York", "Sydney"];

 console.log("Original Order: " + placesToVisit.join(', '));
 
 console.log("Alphabetical Order: " + placesToVisit.slice().sort().join(', '));
 console.log("Original Order (still): " + placesToVisit.join(', '));
 
 console.log("Reverse Alphabetical Order: " + placesToVisit.slice().sort().reverse().join(', '));
 console.log("Original Order (still): " + placesToVisit.join(', '));
 
 placesToVisit.reverse();
 console.log("Reversed Order: " + placesToVisit.join(', '));
 
 placesToVisit.reverse();
 console.log("Original Order (again): " + placesToVisit.join(', '));
 
 console.log("Alphabetical Order: " + placesToVisit.slice().sort().join(', '));
 
 console.log("Reverse Alphabetical Order: " + placesToVisit.slice().sort().reverse().join(', '));
  //Question 19.
  let dinnerguest: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
  console.log(`Dear ${dinnerguest[0]}, you are invited to dinner. Please join us.`);
  console.log(`Dear ${dinnerguest[1]}, you are invited to dinner. Please join us.`);
  console.log(`Dear ${dinnerguest[2]}, you are invited to dinner. Please join us.`);
console.log(`Number of people invited to dinner: ${dinnerguest.length}`);
//Question 20.
let items: string[] = ["mobile", "car", "laptop", "house", "money"];
console.log(`I have a ${items.join(',')}.`);
//Question 21.
const item1 = { name: "Item 1", price: 10.99 };
const item2 = { name: "Item 2", price: 5.49 };
const item3 = { name: "Item 3", price: 15.99 };

console.log(item1);
console.log(item2);
console.log(item3);
//Question 22.
const myArray: number[] = [1, 2, 3];
console.log(myArray[5]); // Accessing an index that doesn't exist
//Question 23.
let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda');

console.log("Is car < 'toyota'? I predict True.");
console.log(car < 'toyota');

console.log("Is car > 'volvo'? I predict False.");
console.log(car > 'volvo');

console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru');

console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru');

console.log("Is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru');

console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');
//Question 24.
let fruits: string[] = ["apple", "banana", "cherry", "grape", "kiwi"];
let testFruit = "banana";

console.log("Is 'banana' in the list of favorite fruits? I predict True.");
console.log(fruits.includes(testFruit));

console.log("Is 'mango' in the list of favorite fruits? I predict False.");
console.log(fruits.includes("mango"));

console.log("Is 'kiwi' not in the list of favorite fruits? I predict False.");
console.log(!fruits.includes("kiwi"));

console.log("Is 'apple' not in the list of favorite fruits? I predict True.");
console.log(!fruits.includes("apple"));

console.log("Is 8 > 12 or 'cherry' == 'cherry'? I predict True.");
console.log(8 > 12 || 'cherry' == 'cherry');

//Question 25.
const alien_color = 'green';

if (alien_color === 'green') {
  console.log("Player earned 5 points.");
}
//Question 26.
const Alien_color = 'green';

if (Alien_color === 'green') {
  console.log("Player earned 5 points for shooting the alien.");
} else {
  console.log("Player earned 10 points.");
}
//Question 27.
let alien_colour = 'yellow';

if (alien_colour === 'black') {
  console.log("Player earned 5 points.");
} else if (alien_colour === 'yellow') {
  console.log("Player earned 10 points.");
} else if (alien_colour === 'red') {
  console.log("Player earned 15 points.");
}
//Question 28.
let age = 35;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}
//Question 29.
let favorite_fruits = ["apple", "banana", "cherry"];

if (favorite_fruits.includes("banana")) {
  console.log("You really like bananas!");
}
if (favorite_fruits.includes("apple")) {
  console.log("You really like apples!");
}
if (favorite_fruits.includes("kiwi")) {
  console.log("You really like kiwis!");
}
if (favorite_fruits.includes("strawberry")) {
  console.log("You really like strawberries!");
}
if (favorite_fruits.includes("mango")) {
  console.log("You really like mangos!");
}

//Question 30.
let usernames = ['admin', 'Alice', 'Bob', 'Charlie', 'David'];

for (const username of usernames) {
  if (username === 'admin') {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}
//Question 31.
let username: string[] = [];

if (usernames.length === 0) {
  console.log("We need to find some users!");
}

// To remove all usernames from the array:
usernames.length = 0;

//Question 32.
const current_users: string[] = ["John", "Alice", "Bob", "Charlie", "David"];
const new_users: string[] = ["Dave", "Alice", "Eve", "Frank", "Grace"];

for (const new_user of new_users) {
  const usernameExists = current_users.some(user => user.toLowerCase() === new_user.toLowerCase());
  if (usernameExists) {
    console.log(`${new_user} will need to enter a new username.`);
  } else {
    console.log(`${new_user} is available.`);
  }
}


//Question 33.
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  let ordinal;
  if (number === 1) {
    ordinal = "1st";
  } else if (number === 2) {
    ordinal = "2nd";
  } else if (number === 3) {
    ordinal = "3rd";
  } else {
    ordinal = `${number}th`;
  }
  console.log(ordinal);
}


//Question 34.
const favorite_pizzas: string[] = ["Pepperoni", "Margherita", "Hawaiian"];

for (const pizza of favorite_pizzas) {
  console.log(`I like ${pizza} pizza.`);
}

console.log("I really love pizza!");

//Question 35.
const animals: string[] = ["Dog", "Cat", "Rabbit"];

for (const animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}

console.log("Any of these animals would make a great pet!");

//Question 36.
function make_shirt(size: string, message: string) {
    console.log(`Shirt size: ${size}, Message: "${message}"`);
  }
  
  make_shirt("Large", "I love TypeScript");
  make_shirt("Medium", "Default Message");
  make_shirt("Small", "Custom Message");
  
//Question 37.
function make_largeshirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`Shirt size: ${size}, Message: "${message}"`);
  }
  
  make_largeshirt(); // Large shirt with the default message
  make_largeshirt("Medium"); // Medium shirt with the default message
  make_largeshirt("Small", "Custom Message"); // Small shirt with a custom message
  
//Question 38.
function describe_city(city: string, country: string = "Unknown") {
    console.log(`${city} is in ${country}.`);
  }
  
  describe_city("Karachi", "Pakistan");
  describe_city("New York");
  describe_city("London", "UK");
  
//Question 39.
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  console.log(city_country("Lahore", "Pakistan"));
  console.log(city_country("Tokyo", "Japan"));
  console.log(city_country("New York", "USA"));
  
//Question 40.
interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks !== undefined) {
      album.tracks = tracks;
    }
    return album;
  }
  
  const album1 = make_album("Artist1", "Album1");
  const album2 = make_album("Artist2", "Album2", 12);
  const album3 = make_album("Artist3", "Album3", 8);
  
  console.log(album1);
  console.log(album2);
  console.log(album3);
  
  
  
//Question 41.
function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicians = ["Merlin", "Houdini", "David Copperfield"];
  show_magicians(magicians);
  
  function make_great(magicians: string[]) {
    const greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
  }
  
  const greatMagicians = make_great(magicians);
  show_magicians(greatMagicians);
  
//Question 42.
function show_magician(magicians: string[]) {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_greats(magician: string[]) {
    const greatMagician = magician.map(magician => `the Great ${magician}`);
    return greatMagician;
  }
  
  const magician = ["Merlin", "Houdini", "David Copperfield"];
  const greatMagician = make_great(magician);
  show_magician(magician);
  show_magician(greatMagician);
  
//Question 43.
function order_sandwich(...items: string[]) {
    console.log("You ordered a sandwich with:");
    for (const item of items) {
      console.log(item);
    }
  }
  
  order_sandwich("Lettuce", "Tomato", "Cheese");
  order_sandwich("Turkey", "Bacon", "Avocado", "Onion");
  
//Question 44.
function describe_car(manufacturer: string, model: string, ...options: string[]) {
    const car: { manufacturer: string; model: string; options: Record<string, string> } = {
      manufacturer,
      model,
      options: {}
    };
  
    for (const option of options) {
      const [key, value] = option.split(':');
      car.options[key.trim()] = value.trim();
    }
  
    console.log(car);
  }
  
  describe_car("Toyota", "Camry", "Color: Blue", "Sunroof: Yes");
  describe_car("Honda", "Civic", "Transmission: Automatic", "GPS: Included");
  
  





