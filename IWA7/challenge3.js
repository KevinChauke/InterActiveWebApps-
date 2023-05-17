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

const owed = (( leoBalance * -1) + (sarahBalance* -1)).toFixed(2) 
const leo = `${leoName} ${leoSurname.trim()} (Owed : R${(leoBalance * -1).toFixed(2) })` 
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed : R${(sarahBalance * -1).toFixed(2) })`

// added currency
// used '\n' as a line braek

const total = "Total amount owed: R"
const result = leo +'\n' + sarah +'\n' + '\n' + divider +'\n'  + total + owed +'\n' + divider

console.log(result)