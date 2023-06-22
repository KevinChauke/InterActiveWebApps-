// this is an object containing property "List" which has 3 arrays
const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

// declaring the 3 variables and accessing the arrays
const first = data.lists[0][1]
const second  = data.lists[1][1]
const third = data.lists[2][1]

// new array called results
const result = []


// this is an arrow fuction called "extractBiggest", it checks the array that has the largest number at the end and removes it, then moves it to the new array called "results"
// this fuction will repeat 15 times.
const extractBiggest = () => {
     // if the [first] last number is bigger than the [second] last number then remove the [first] number and "push" it to the new array [results]
	if (first[first.length-1] > second[second.length-1]) {
		return first.pop()                                  //".pop" is used to remove/extract the last element from arrays.
	}

    // if the [third] last number is smaller than the [second] last number then remove the [second] number and "push" it to the new array [results]
	if (third[third.length-1] < second[second.length - 1]) {
		return second.pop()
	} else {
        return third.pop()
    }
	
	
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)