const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

//declared currency & balance 

let currency = 'R';
let balance;

// fixed the if statement with bruckects, and removed bugs from the if statement

if (hourOfDay == 00 && minuteOfDay == 00) {

    // since tax was declared as a string because of the %, i had to parse it into an integer and removed 100 from '' since it was a string.
    
    const taxAsDecimal = parseInt(tax) / 100      
    const startingAfterTax = salary * ( 1 - taxAsDecimal)  // 1 was spelt as a string.

    // balance and startingAfterTax  was spelt incorrectly

    balance = startingAfterTax - transport - food - rent    

}

// changed the decimals from 3 to 2
console.log(currency, balance.toFixed(2))

// A quick question, why cant i declare balance inside the if statement?