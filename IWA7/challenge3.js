const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'




// Only change below this line

// multiplied balances by -1 to get a positive value. 
// Used trim() to remove the leading and trailing white space from LeoSurname and sarahName.


// const sss = Math.abs(parseInt(sarahBalance) + parseInt(leoBalance)).toFixed(2)
// console.log(sss)

const owed = (( leoBalance * -1) + (sarahBalance* -1)).toFixed(2)
const leo = `${leoName} ${leoSurname.trim()} (Owed : R${(leoBalance * -1).toFixed(2) })` 
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed : R${(sarahBalance * -1).toFixed(2) })`

// added currency
// used '\n' as a line braek

const total = "Total amount owed: R"
const result = leo +'\n' + sarah +'\n' + '\n' + divider +'\n'  + total + owed +'\n' + divider

console.log(result)



// another way of doing it

// const owed = (parseInt(-1 *  leoBalance) + parseFloat(-1 * sarahBalance)).toFixed(2)
// const leo = console.log( `${leoName} ${leoSurname} \Owed : R\ ${(- 1* leoBalance).toFixed(2) }`   )
// const sarah = console.log( `${sarahName} ${sarahSurname} \Owed : R\ ${(-1 * sarahBalance).toFixed(2) }`   )

// const total = "Total amount owed: R"
// const result =  divider +'\n'  + total + owed +'\n' + divider

// console.log(result)