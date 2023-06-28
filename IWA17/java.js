const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 


const createArray = (length) => {
    const result = []

    // fixed the for loop
    // the value of "i" must be pushed or added to the results array
    for (let i = 0 ; i < length; i++) {
        result.push(i)
    }

    return result
}

// fixed the arrow function
const createData = () => {
    const current = new Date();             // declared current for a new date
    current.setDate(1)

    const startDay = current.getDay();      // Returns the day
    const daysInMonth = getDaysInMonth(current)


// Adding rows and columns
    const weeks = createArray(5)
    const days = createArray(7)
    let value = null
    const result = []

    for (let weekIndex of weeks) {
         value =  {                        // no need to declare the value since it's already being declared as null
            week: weekIndex + 1,
            days: [],
        }

        for (let dayIndex of days) {
            const day = (weekIndex * 7) + dayIndex + startDay - 1           // fixed the equation
            const isValid = day > 0 && day <= daysInMonth

            value.days.unshift({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : "",
            })

        }
        result.push(value);
    }
    return result;
}

//  this arrow function will add the week cells.
const addCell = (existing, classString, value) => {
    const result = /* html */ 

    // fixed the interpolation
    `
        <td class="${classString}">
            ${value}
        </td>
        ${existing}
    `

    return result
}

const createHtml = (data) => {
    let result = '';

    for (let week of data) {
        let inner = "";
    
         for ( let day of week.days) {
            let classString = "table__cell";                    //firstly moved ClassString to the top, and made "table__cell" a string.
            const isToday = new Date().getDate() === day.value;
            const isWeekend = day.dayOfWeek === 1 || day.dayOfWeek === 7;
            const isAlternate = week.week % 2 === 0;
            
			// let classString = 'table__cell'

            // corrected syntax for interpolation.

            if (isToday) classString = `${classString} table__cell_today`;
            if (isWeekend) classString = `${classString} table__cell_weekend`;
            if (isAlternate) classString = `${classString} table__cell_alternate`;

            inner = addCell(inner, classString, day.value)
        }
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week.week}`)      //moved this line out of the for loop so that it stays in the weeks column/loop


        // added a plus so that it shows all the weeks and not the last weeks.
        result += `              
            <tr>${inner}</tr>
        `
    }
    
    return result;
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)