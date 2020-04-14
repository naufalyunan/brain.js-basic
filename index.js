const brain = require('brain.js')
const net = new brain.NeuralNetwork({ hiddenLayers: [3] })

const training = net.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
	{ input: [1, 1], output: [0] },
	
	{ input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
	{ input: [1, 1], output: [0] },
	
	{ input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
	{ input: [1, 1], output: [0] },
	
	{ input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] },
])
//logging error and number of iteration of training data
console.log(training)


//logging the output result of training data
const output = net.run([1, 0]) 
console.log(output)