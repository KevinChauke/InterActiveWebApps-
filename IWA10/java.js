const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment


// an if statement to check if an item has been assigned to item 9 or not.
if (holidays[`${futureId}`]) {
    console.log(holidays[`${futureId}`].name);
} else {
    console.log(`ID ${futureId} not created yet`)
}

// an object to declare the temporary changes
let copied = holidays.christmas
copied = {
    id: holidays[christmas].id,
    name: 'X-mas Day',
    date: new Date(`25 December ${currentYear} `),  // remove the 13:25
}

// added the setHours & setMinutes method on the dates.
correctDate = copied.date
correctDate.setHours(0)
correctDate.setMinutes(0)
isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', isEarlier)

if (isEarlier) {copied.date = correctDate} // curly brackets on the if statement

// replaced the || with &&
// toLocaleDateString()

console.log('ID change:', holidays[christmas].id != copied.id && copied.id)
console.log('Name change:', holidays[christmas].name !== copied.name && copied.name)  
console.log('Date change:', holidays[christmas].date !== copied.date && copied.date.toLocaleDateString())   

const firstHolidayTimestamp = Math.min(
    new Date (holidays[0].date).getTime(),
    new Date (holidays[1].date).getTime(),
    new Date (holidays[2].date).getTime(),
    new Date (holidays[3].date).getTime(),
    new Date (holidays[4].date).getTime(),
    new Date (holidays[5].date).getTime(),
    new Date (holidays[6].date).getTime(),
    new Date (holidays[7].date).getTime(),
    new Date (holidays[8].date).getTime(),
)

const lastHolidayTimestamp = Math.max(
    new Date (holidays[0].date).getTime(),
    new Date (holidays[1].date).getTime(),
    new Date (holidays[2].date).getTime(),
    new Date (holidays[3].date).getTime(),
    new Date (holidays[4].date).getTime(),
    new Date (holidays[5].date).getTime(),
    new Date (holidays[6].date).getTime(),
    new Date (holidays[7].date).getTime(),
    new Date (holidays[8].date).getTime(),
)




const firstDay = new Date (firstHolidayTimestamp).getDate()
const firstMonth = new Date (firstHolidayTimestamp).getMonth() +1
const lastDay =  new Date (lastHolidayTimestamp).getDate()
const lastMonth = new Date (lastHolidayTimestamp).getMonth() +1

console.log(`0${firstDay}/0${firstMonth}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)


const randomHoliday = holidays[Math.round(Math.random() * 9)].date
const randomDay = randomHoliday.getDate()
const randomMonth = randomHoliday.getMonth() + 1
console.log(`${randomDay}/${randomMonth}/${currentYear}`)

// const randomHoliday = holidays[Math.random]
// console.log(randomHoliday.date)