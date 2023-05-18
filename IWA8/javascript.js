const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

// there were a lot of errors on the objects, had to fix them.
// added equal signs on the objects
// replaced equal signs with colons and added commas at the end of each key declaration.
// accessId had a space in between, used camel case on it.
// postalCode keys was in kebab case and that doesn't work in JS



const leo = {
	name : leoName,             // LeoName had a surname on the declaration, so i had to remove the "+ LeoSurname"
	balance : leoBalance,
	accessId : '47afb389-8014-4d0b-aff3-e40203d2107f',     //needs quotations because its a string
	age : 24
}

// declared address so it can have its own object
	const LeoAddress= {
		number : leoNumber,
		street : leoStreet,
		postalCode : leoPostal
	}


const sarah = {
	name : sarahName + sarahSurname,   //sarah was spelt incorrectly
	age : 62,
	accessId : "6b279ae5-5657-4240-80e9-23f6b635f7a8",       //needs quotations because its a string
	balance : sarahBalance


}

// declared address so it can have its own object
	const SarahAddress = {
		number : sarahNumber,
		street : sarahStreet,
		postalCode : sarahPostal
	}


//added curly brackets on the address so it can be nested
console.log(leo, {LeoAddress})
console.log(sarah, {SarahAddress})

