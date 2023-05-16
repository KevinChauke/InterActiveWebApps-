// the console displayed "Good Morning, ${nickname} || {firstname}!" because it had quatation marks, had to replace them with back tags

const nickname = null;
const firstname = null;

if (nickname && firstname) {                    //if nickname and first name is truthy, the console should display the nickname.
  console.log(`Good morning, ${nickname}!`);   // the back tags and the $ are used to evaluate the value and put it inside there as a string.
} else if (nickname) {
  console.log(`Good morning, ${nickname}!`);
} else if (firstname) {
  console.log(`Good morning, ${firstname}!`);
} else {
  console.log("Good morning!");                 // if none of the statements is truthy it should only display "Goodmorning!"
}