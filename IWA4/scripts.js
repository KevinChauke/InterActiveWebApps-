const date = 2050
let status = 'parent'
let count = 0


if (date == 2050) {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	// date = 'April'
	console.log('April', 'Family Day')
	console.log('April', 'Freedom Day')
	count = count + 4

	if (status == "student") {
	  console.log('June', 'Youth Day')
		count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	 //date = 'December'
	console.log('December', 'Day of Reconciliation')
	 count = count + 3

	if (status == "parent") {
	  console.log('December', 'Christmas Day')
		 count = count + 1
  }

	console.log('December', 'Day of Goodwill')
	 count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)