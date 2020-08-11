/* eslint-disable prefer-destructuring */
/* eslint-disable no-unused-vars */
// ALGORITHM SPEED AND BIG O Notation

/*
In computer science, big O notation is used to classify
algorithms according to how their run time or space
requirements grow as the input size grows.

We judge our algorithms by their worst case scenario
*/


// INITIALIZE VARIABLES
const constData = {
  x: [],
  y: [],
  type: 'scatter',
  name: 'constant O(1)',
}

const linearData = {
  x: [],
  y: [],
  type: 'scatter',
  name: 'linear O(n)',
}

const quadraticData = {
  x: [],
  y: [],
  type: 'scatter',
  name: 'quadratic O(n^2)',
}

const exponentialData = {
  x: [],
  y: [],
  type: 'scatter',
  name: 'exponential O(2^n)',
}

const logarithmicData = {
  x: [],
  y: [],
  type: 'scatter',
  name: 'logarithmic O(log n)',
}


const layout = {
  title: 'Algorithm Speed',
  xaxis: {
    title: 'Number of Items',
  },
  yaxis: {
    title: 'Running Time Complexity (ms)',
  },
}

function createRandNumArr(size, max) {
  const data = []
  for (i = 0; i < size; i += 1) {
    data[i] = Math.round((Math.random() * max) + 1)
  }
  return data
}

function updateY(chartName, value) {
  chartName.y.push(value)
}

function updateX(chartName, value) {
  chartName.x.push(value)
}

/* ***** O(1) CONSTANT TIME ***** */

/*
This is the ideal, no matter how many items there are,
whether one or one million, the amount of time to
complete will remain the same. Most operations that perform a
single operation are O(1). Pushing to an array, getting an
item at a particular index, adding a child element, etc, will
all take the same amount of time regardless of the array length.
*/

function constantTime(numItems) {
  const array = createRandNumArr(numItems, 100)

  // MAIN CODE
  const startTime = performance.now()
  const first = array[0]
  const endTime = performance.now()

  const totalTime = endTime - startTime

  // Update Chart
  updateX(constData, numItems)
  updateY(constData, totalTime)

  // Report
  // console.log(`Constant Time: ${totalTime} for ${numItems} items.`)
}

constantTime(10) // ten
constantTime(100) // one hundred
constantTime(1000) // one thousand
constantTime(10000) // ten thousand
constantTime(100000) // one hundred thousand
constantTime(1000000) // one million
constantTime(100000000) // one hundred million

/* ***** O(n) LINEAR TIME ***** */

/*
By default, all loops are an example of linear growth
because there is a one-to-one relationship between the
data size and time to completion. So an array with
1,000 times more items will take exactly 1,000 times longer.
*/
function linearTime(numItems) {
  const array = createRandNumArr(numItems, 100)

  // MAIN CODE
  const startTime = performance.now()
  for (i = 0; i < array.length; i += 1) {
    array[i] += 1
  }
  const endTime = performance.now()

  const totalTime = endTime - startTime

  // Update chart
  updateX(linearData, numItems)
  updateY(linearData, totalTime)

  // Report
  // console.log(`Linear Time: ${totalTime} for ${numItems} items.`)
}

linearTime(10) // ten
linearTime(100) // one hundred
linearTime(1000) // one thousand
linearTime(10000) // ten thousand
linearTime(100000) // one hundred thousand
linearTime(1000000) // one million
linearTime(100000000) // one hundred million


/* ***** O(n^2) QUADRATIC TIME ***** */

/*
Quadratic Time Complexity represents an algorithm whose performance is
directly proportional to the squared size of the input data set(think
of Linear, but squared). Within our programs, this time complexity
will occur whenever we nest over multiple iterations within the data sets.

Exponential growth is a trap we’ve all fall into
at least once. Need to find a matching pair for
each item in an array? Putting a loop inside a
loop is great way of turning an array of 1,000
items into a million operation search that’ll
freeze your browser. It’s always better to have
to do 2,000 operations over two separate loops
than a million with two nested loops.
*/

function quadraticTime(numItems) {
  const array1 = createRandNumArr(numItems, 100)
  const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // MAIN CODE
  const startTime = performance.now()
  for (let i = 0; i < numItems; i += 1) {
    for (let n = 0; n < array2.length; n += 1) {
      if (array2[n] === array1[i]) {
        const check = true
      }
    }
  }

  const endTime = performance.now()

  const totalTime = endTime - startTime

  // Update chart
  updateX(quadraticData, numItems)
  updateY(quadraticData, totalTime)

  // Report
  // console.log(`Quadratic Time: ${totalTime} for ${numItems} items.`)
}

quadraticTime(10) // ten
quadraticTime(100) // one hundred
quadraticTime(1000) // one thousand
quadraticTime(10000) // ten thousand
quadraticTime(100000) // one hundred thousand
quadraticTime(1000000) // one million
quadraticTime(100000000) // one hundred million

/* ***** O(2^n) EXPONENTIAL TIME ***** */
/*


An algorithm is said to have an exponential time or O(2^n)
if its runtime doubles with each addition to the input data
set. The growth curve of an O(2^n) function is exponential —
starting off very shallow, then rising meteorically. A
recursive calculation of Fibonacci numbers is one example
of an O(2^n) function.
*/

function fibRecur(num) {
  if (num < 2) {
    return num
  }
  return fibRecur(num - 1) + fibRecur(num - 2)
}

function exponentialTime(num) {
  // MAIN LOOP
  const startTime = performance.now()
  fibRecur(num)
  const endTime = performance.now()
  const totalTime = endTime - startTime
  // Update chart
  updateX(exponentialData, num)
  updateY(exponentialData, totalTime)

  // Report
  // console.log(`Exponential Time: ${totalTime} for ${num} items.`)
}

// exponentialTime(10)
// exponentialTime(20)
// exponentialTime(40)

/* ***** O(log n) LOGARITHMIC TIME ***** */
/*

*/

// BINARY SEARCH
function binarySearch(array, targetNum) {
  let min = 0
  let max = array.length - 1
  let counter = 0

  while (max >= min) {
    counter += 1
    const mid = Math.floor((min + max) / 2)
    if (array[mid] === targetNum) {
      // console.log(`The number of items searched: ${counter}`)
      return mid
    }

    if (array[mid] < targetNum) {
      min = mid + 1
    } else {
      max = mid - 1
    }
  }

  // console.log(`The number of items searched: ${counter}`)
  return false
}

function logarithmicTime(numItems) {
  const array = createRandNumArr(numItems, 100)
  const randomTarget = Math.round((Math.random() * 100) + 1)

  // MAIN LOOP
  const startTime = performance.now()
  binarySearch(array, randomTarget)
  const endTime = performance.now()
  const totalTime = endTime - startTime
  // Update chart
  updateX(logarithmicData, numItems)
  updateY(logarithmicData, totalTime)
}

logarithmicTime(10) // ten
logarithmicTime(100) // one hundred
logarithmicTime(1000) // one thousand
logarithmicTime(10000) // ten thousand
logarithmicTime(100000) // one hundred thousand
logarithmicTime(1000000) // one million
logarithmicTime(100000000) // one hundred million

/* ***** DRAW CHART ***** */
const chart = [constData, linearData, quadraticData, exponentialData, logarithmicData]
Plotly.newPlot('chart', chart, layout)
