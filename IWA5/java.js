const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0

const customers = 1
let shipping;  //ternary 
let currency;  //ternary 

shoes = 300 * 1
toys = 100 * 5
shirts = 150 * NONE_SELECTED
batteries = 35 * 2
pens = 5 * NONE_SELECTED

const Location = 'RSA'

const sum = shoes + toys + batteries + pens + shirts
// console.log(sum)


if (Location === 'RSA') {
    currency = 'R'
    shipping = 400;
}

else if (Location === 'NAM') {
    currency = '$'
    shipping = 600
}
else {
    currency = '$'
    shipping = 800
}

if ((Location === 'RSA' || Location === 'NAM') && customers === 1 && sum >= 1000) {
    shipping = 0
}

if (Location === 'NK') {
    console.log(BANNED_WARNING)
}

if (customers !== 1) {
    console.log(FREE_WARNING)
}

else {
    console.log('Price:', currency, sum + shipping)
}


