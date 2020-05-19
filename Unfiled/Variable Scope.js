/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
// Global variables
const myName = 'MJ'
const amount = 3


// code here can use myName

function myFunction1() {
  const amount = 0
  // code here can also use myName


  // Local variables
  // code here can NOT use myName

  function myFunction2() {
    const myName = 'MJ'
    const amount = 3

    // code here CAN use myName
  }

  // Function Parameters are local variables by default

  function myFunction3(name) {
    console.log(name)
  }
  // name can NOT be used here

  // But...NAME can be used
  myFunction4(MJ)

  if (x === 0) {
    console.log(x)
  }
}
