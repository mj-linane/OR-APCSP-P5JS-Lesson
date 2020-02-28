const person = {
  firstName: 'MJ',
  lastName: 'Linane',
  age: 34,

  getYearBorn() {
    return 2020 - this.age
  },
}

// console.log(person);

// Access object properties
console.log(person.firstName)

person.firstName = 'Eli'
console.log(person.firstName)

const newStudent = `${person.firstName} ${person.lastName}`
console.log(newStudent)
