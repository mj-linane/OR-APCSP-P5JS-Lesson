let s
let num = 5
let string = 'my name is MJ   '

// CHECK LENGTH
console.log(string.length)


// CONVERSION
s = num.toString()
console.log(typeof s)

// SEARCHING STRINGS
// Searches for an element, returns -1 if not found, otherwise first index
s = string.search('M')

// Returns true/false if it starts with that value
s = string.startsWith('m')

// Checks to see if the string includes the value, returns true/false
s = string.includes('m')


// MODIFYING STRINGS
// Lower case conversion
s = string.toLowerCase()

// Uppercase conversion
s = string.toUpperCase()

// Concatenate Strings
s = string.concat('How Are you?')

// Cuts out part of a string
s = string.slice(0, 3)

// Trim length and measure
s = string.trim()
console.log(s.length)
