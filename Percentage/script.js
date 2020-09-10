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
	calculateCard(mtn, mtnPrice, mtnCost)
	calculateCard(airtel, airtelPrice, airtelCost)
	calculateCard(nmobile, nmobilePrice, nmobileCost)
	insertCard(gloCost)
	insertCard(mtnCost)
	insertCard(airtelCost)
	insertCard(nmobileCost)
})

addition.addEventListener('click', () => {
	calculateCost(glo, gloCost, gloEarn)
	calculateCost(mtn, mtnCost, mtnEarn)
	calculateCost(airtel, airtelCost, airtelEarn)
	calculateCost(nmobile, nmobileCost, nmobileEarn)
})

// Calculate Discounted price
function calculateCost(mainArr, discountArr, newArray) {
	let result = mainArr.map((item, index) => {
		return item - discountArr[index]
	})
	let resultLoop = result.forEach((indices) => {
		newArray.push(indices)
	})
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
		newTable.classList.add('gloDiv')
		newTable.innerHTML = `<td>${item}</td>`
		costRow.appendChild(newTable)
	})
}
