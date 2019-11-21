//Global variables
let myName = "MJ";
let amount = 3;


// code here can use myName

function myFunction() {
  let amount = 0;
  // code here can also use myName 


  //Local variables
  // code here can NOT use myName

  function myFunction() {
    let myName = "MJ";
    let amount = 3;

    // code here CAN use myName

  }

  //Function Parameters are local variables by default

  function myFunction(name) {
    console.log(name)
  }
  //name can NOT be used here

  //But...NAME can be used
  myFunction(MJ)

  if (x = 0) {
    console.log(x)
  }
}