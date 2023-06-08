firstName = 'John';
age = 35;
hobby = 'Coding';

// the problem is that hobby cannot be a function because it's already being declared as a string.
// this is an arrow fuction that is called logTwice, it has a parameter called "parameter" which will be logged twice to the console.

const logTwice = (parameter) => {
  console.log(parameter)                 // corrected "console" to "console.log"
  console.log(parameter)
}

// changed "hobby" to "parameter" on the function since it was not a fuction and was declared as a string
function parameter () {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)       // corrected "name" to "firstName"
}

// calling th parameter function to log the logTwice message
parameter()