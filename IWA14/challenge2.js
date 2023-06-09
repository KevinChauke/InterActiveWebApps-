// script.js


// this is the declaration so i changed the "function" to "const" and the corrected the arrow function.
// Removed the curley brackets
const add =  (a, b) => a + b

const multiply = (a, b) => a * b    		// changed the "-" to "*" since the condition needs to be multiplied.

function internal() {
	const added = this.add(this.internal.a, this.internal.b)
	// multiply was declared at the top, so it can't be declared twice, had to change the name to multiplied.
	const multiplied = this.multiply(added, this.internal.c)   			// changed this to "const" since it's another declaration.  
	console.log(multiplied)
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()