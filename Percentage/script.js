const mtnPrice = document.getElementById('mtnprice').value
const gloPrice = document.getElementById('gloprice').value
const airtelPrice = document.getElementById('airtelprice').value
const nmobilePrice = document.getElementById('nmobileprice').value

const costRow = document.getElementById('table')

const mainTableData = document.getElementById('maintable')

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
	// insertCard(gloCost)
	// insertCard(mtnCost)
	// insertCard(airtelCost)
	// insertCard(nmobileCost)
})

addition.addEventListener('click', () => {
	calculateCost(glo, gloCost, gloEarn)
	calculateCost(mtn, mtnCost, mtnEarn)
	calculateCost(airtel, airtelCost, airtelEarn)
	calculateCost(nmobile, nmobileCost, nmobileEarn)
	populate()
	// populateUI(glo, gloCost, gloEarn)
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
// const insertCard = (arr) => {
// 	arr.forEach((item) => {
// 		const newTable = document.createElement('div')
// 		newTable.classList.add('gloDiv')
// 		newTable.innerHTML = `<td>${item}</td>`
// 		costRow.appendChild(newTable)
// 	})
// }

function populate() {
	mainTableData.innerHTML = `<tr>
<td>${glo[0]}</td>
<td>${gloCost[0]}</td>
<td>${gloEarn[0]}</td>
</tr>

<tr>
<td>${glo[1]}</td>
<td>${gloCost[1]}</td>
<td>${gloEarn[1]}</td>
</tr>

<tr>
<td>${glo[2]}</td>
<td>${gloCost[2]}</td>
<td>${gloEarn[2]}</td>
</tr>

<tr>
<td>${glo[3]}</td>
<td>${gloCost[3]}</td>
<td>${gloEarn[3]}</td>
</tr>

<tr>
<td>${glo[4]}</td>
<td>${gloCost[4]}</td>
<td>${gloEarn[4]}</td>
</tr>

<tr>
<td>${glo[5]}</td>
<td>${gloCost[5]}</td>
<td>${gloEarn[5]}</td>
</tr>

<tr>
<td>${glo[6]}</td>
<td>${gloCost[6]}</td>
<td>${gloEarn[6]}</td>
</tr>

<tr>
<td>${glo[7]}</td>
<td>${gloCost[7]}</td>
<td>${gloEarn[7]}</td>
</tr>

<tr>
<td>${glo[8]}</td>
<td>${gloCost[8]}</td>
<td>${gloEarn[8]}</td>
</tr>

<tr>
<td>${glo[9]}</td>
<td>${gloCost[9]}</td>
<td>${gloEarn[9]}</td>
</tr>

<tr>
<td>${glo[10]}</td>
<td>${gloCost[10]}</td>
<td>${gloEarn[10]}</td>
</tr>`
}

function populateUI(glo, gloCost, gloEarn) {
	glo.forEach((gloItem) => {
		console.log(gloItem)
		gloCost.forEach((gloCostItem) => {
			console.log(gloItem)
			gloEarn.forEach((gloEarnItem) => {
				mainTableData.innerHTML = `<tr>
				<td>${gloItem}</td>
				<td>${gloCostItem}</td>
				<td>${gloEarnItem}</td>
				</tr>`
			})
		})
	})
}

// function populateUI(glo, gloCost, gloEarn) {
// 	glo.forEach((gloItem) => {
// 		// return gloItem
// 	})
// 	gloCost.forEach((gloCostItem) => {
// 		// return gloCostItem
// 	})
// 	gloEarn.forEach((gloEarnItem) => {
// 		// return gloEarnItem
// 	})
// 	mainTableData.innerHTML = `<tr>
// 				<td>${gloItem}</td>
// 				<td>${gloCostItem}</td>
// 				<td>${gloEarnItem}</td>
// 				</tr>`
// }
