// ==== Closures ==== 
console.log('**** CLOSURES ****');
/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
console.log( '## task one: explanation ## \n',
  'The nested function can access the variable internal because they are in the same scope. The varibable internal is declared in the myFunction (functional) scope which is the block scope that nestedFunction is within.'
);

/* Task 2: Counter */
console.log('## task two: counter ##')
/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(num) {
  console.log('FINISH LATER')
}
summation();