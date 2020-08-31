const mainPercent = document.getElementById('mainpercent')
const mtnPrice = document.getElementById('mtnprice')
const gloPrice = document.getElementById('gloprice')
const airtelPrice = document.getElementById('airtelprice')
const nmobilePrice = document.getElementById('nmobileprice')

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
let mtnPercent = []
let gloPercent = []
let airtelPercent = []
let nmobilePercent = []

costRow.innerHTML = ''
// Event Listeners
solution.addEventListener('click', () => {
	calculateMtn()
	calculateGlo()
	calculateAirtel()
	calculateNmobile()
	// insertMtn()
	// insertGlo()
	// insertAirtel()
	// insertNmobile()
})

addition.addEventListener('click', () => {
	let percentResult = percentage(mainPercent.value, mainPrice.value)
	console.log(Number(mainPrice.value) - Number(percentResult))
})

// percentage calculation function
function percentage(percent, total) {
	return ((percent / 100) * total).toFixed(0)
}

// Calculating the percentage and pushing result to new array
function calculateMtn() {
	mtn.forEach((item) => {
		let mtnPercentResult = percentage(mtnPrice.value, item)
		console.log(mtnPercentResult)
		mtnPercent.push(+mtnPercentResult)
	})
}

function calculateGlo() {
	glo.forEach((item) => {
		let gloPercentResult = percentage(gloPrice.value, item)
		console.log(gloPercentResult)
		gloPercent.push(+gloPercentResult)
		insertGlo(glo)
	})
}

function calculateAirtel() {
	airtel.forEach((item) => {
		let airtelPercentResult = percentage(airtelPrice.value, item)
		console.log(airtelPercentResult)
		airtelPercent.push(+airtelPercentResult)
	})
}

function calculateNmobile() {
	nmobile.forEach((item) => {
		let nmobilePercentResult = percentage(nmobilePrice.value, item)
		console.log(nmobilePercentResult)
		nmobilePercent.push(+nmobilePercentResult)
	})
}

console.log(mtnPercent)

// function for putting calculated percentage in the DOM
function insertMtn() {
	mtnPercent.forEach((item) => {
		const newTable = document.createElement('div')
		newTable.innerHTML = `<td>${item}</td>`
		costRow.appendChild(newTable)

		console.log('insert' + item)
	})
}

function insertGlo(value) {
	value.forEach((item) => {
		const gloTable = document.createElement('td')
		gloTable.innerHTML = `<tr>${item}</tr>`
		gloTable.classList.add('gloDiv')
		costRow.appendChild(gloTable)

		console.log('insert' + item)
	})
}

function insertAirtel() {
	airtelPercent.forEach((item) => {
		const newTable = document.createElement('div')
		newTable.innerHTML = `<td>${item}</td>`
		costRow.appendChild(newTable)

		console.log('insert' + item)
	})
}

function insertNmobile() {
	nmobilePercent.forEach((item) => {
		const newTable = document.createElement('div')
		newTable.innerHTML = `Nmobile <td>${item}</td>`
		costRow.appendChild(newTable)

		console.log('insert' + item)
	})
}
