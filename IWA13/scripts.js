let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


// the arrow fuction format was wrong

const logCalc = () => { 
    const isString = typeof calculated === 'string'                             //'numerical-string' was not a valid value. this condition checks if calculated is a 'string'
    const calculatedAsNumber = isString  ?  parseInt(calculated) : calculated   //calculated was declared as a string value, so i had to change it using parseInt
    calculated = calculatedAsNumber + 1                                         //changed the strict equal (===) to an equal to (=) operator
}

const  calcUser = () => {
  logCalc()                                            //Added the brackects to make it a function
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}


// the below lines are used to call the function
// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()