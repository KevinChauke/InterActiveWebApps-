const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%', 
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = parseInt(tax[913]) / 100        // used parseInt to convert the % to a decimal number.

const startingAfterTax = salary - (salary*taxAsDecimal)      // subtracting the amount of tax from the salary.

/*-Used interpolation to Evaluate the values and put them inside the as a string so can be able to call it.
 -since the key is 'large-apartment' I had to start by calling size, added a dash in between then lodging so it can call it correctly.*/
const type = `${size}-${lodging}`                 

const balance = startingAfterTax - (expenses.transport + expenses.food + rent[type])  // subtracted all the expenses from the taxed salary
console.log(balance.toFixed(2)) 