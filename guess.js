const brain = require('brain.js')

const restaurantDiscountData = {
	"McD": "Monday",
	"KFC": "Friday",
	"Solaria": "Sunday",
	"Fore": "Saturday",
	"Burger King": "Friday",
	"Wings Stop": "Wednesday",
	"Lawless Burgerbar": "Tuesday",
	"Singgalang Jaya": "Thursday"
}

const trainingData = []

for (const restaurantName in restaurantDiscountData) {
	const dayOfWeek = restaurantDiscountData[restaurantName]
	trainingData.push({
		input: {
			[dayOfWeek]: 1 
		},
		output: {
			[restaurantName]: 1
		}
	})
}

// console.log(trainingData)

const net = new brain.NeuralNetwork()

const training = net.train(trainingData)

console.log(training)
console.log('----')

console.log('Monday')
console.log(net.run({ 'Monday': 1 })) //should give mcD the highest
console.log('Tuesday')
console.log(net.run({ 'Tuesday': 1 })) //should give mcD the highest
console.log('Wednesday')
console.log(net.run({ 'Wednesday': 1 })) //should give mcD the highest
console.log('Thursday')
console.log(net.run({ 'Thursday': 1 })) //should give mcD the highest
console.log('Friday')
console.log(net.run({ 'Friday': 1 })) //should give mcD the highest
console.log('Saturday')
console.log(net.run({ 'Saturday': 1 })) //should give mcD the highest
console.log('Sunday')
console.log(net.run({ 'Sunday': 1 })) //should give mcD the highest
