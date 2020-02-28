let string = 'my name is MJ   '

// CHECK LENGTH
console.log(string.length)

// CONVERSION
let num = 5
let s = num.toString()

// SEARCHING STRINGS
// Searches for an element, returns -1 if not found, otherwise first index
s = string.search('M')

// Returns true/false if it starts with that value
s = string.startsWith('m')

// Checks to see if the string includes the value, returns true/false
s = string.includes('MJ')

// MODIFYING STRINGS
// Lower case conversion
s = string.toLowerCase()

// Uppercase conversion
s = string.toUpperCase()

// Cuts out part of a string
s = string.slice(0, 4)
// Trim length and measure
s = string.trim()

// Combining Strings
s = string + "is great" + num + "years \n old"
// Concatenate Strings
s = string.concat('How Are you?')

s = `I am ${num} 
years old
this is awesome
${string}
`

console.log(s)
// CONVERT TO NUMBER
string = 3
num = Number(string)
