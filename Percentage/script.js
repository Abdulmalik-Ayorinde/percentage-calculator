const mainPercent = document.getElementById('mainpercent').value
const mtnPrice = document.getElementById('mtnprice').value
const gloPrice = document.getElementById('gloprice').value
const airtelPrice = document.getElementById('airtelprice').value
const nmobilePrice = document.getElementById('nmobileprice').value

const costRow = document.getElementById('table')

const solution = document.getElementById('solution')
const addition = document.getElementById('addition')

// Array or prices

let mtn = [1000, 500, 1200, 1500, 2000, 2500, 3500, 20000, 30000, 50000, 75000]

let glo = [500, 1000, 2000, 2500, 3000, 4000, 5000, 8000, 15000, 18000, 20000]

console.log(glo)

let airtel = [
	1000,
	1500,
	2000,
	2500,
	3000,
	5000,
	4000,
	8000,
	10000,
	20000,
	15000,
]

let nmobile = [500, 1000, 1200, 2000, 5000, 10000, 15000, 27500]

// Arrays of calculated percentage
let mtnCost = []
let gloCost = []
let airtelCost = []
let nmobileCost = []

// Array for Earnings
let mtnEarn = []
let gloEarn = []
let airtelEarn = []
let nmobileEarn = []

// Event Listeners
solution.addEventListener('click', () => {
	calculateCard(glo, gloPrice, gloCost)
	insertCard(gloCost)
	console.log(gloCost)
})

addition.addEventListener('click', () => {
	// let percentResult = percentage(mainPercent.value, mainPrice.value)
	// console.log(Number(mainPrice.value) - Number(percentResult))

	// subtraction(glo, gloCost)

	calculateCost(glo, gloCost)
})

// Calculate Discounted price

function calculateCost(mainArr, discountArr) {
	var x = mainArr.map((item, index) => {
		return item - discountArr[index]
	})
	console.log(x)
}

// percentage calculation function
function percentage(percent, total) {
	return ((percent / 100) * total).toFixed(0)
}

// Calculating Earnings
const calculateCard = (arr, price, newArr) => {
	arr.forEach((item) => {
		let percentResult = percentage(price, item)
		newArr.push(+percentResult)
	})
}

// function for putting calculated percentage in the DOM
const insertCard = (arr) => {
	arr.forEach((item) => {
		const newTable = document.createElement('div')
		newTable.innerHTML = `<td>${item}</td>`
		costRow.appendChild(newTable)
	})
}
