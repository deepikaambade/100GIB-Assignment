// #1 Javascript
// Q1. Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
// Solution:-
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {        //condition for  fizzbuzz
        console.log("fizzbuzz");
    } 
    
    else if (i % 3 === 0) {
        console.log("fizz");                  //condition for  fizz
    } 
    
    else if (i % 5 === 0) {                   //condition for  buzz
        console.log("buzz");
    } 
    
    else {
        console.log(i);
    }
}




// Q2. Write a JS program to print a Left Triangle Pattern as shown below.*
// **
// ***
// ****
// *****
let row = 5;                                  // Specify the number of rows in the triangle

for (let i = 1; i <= row; i++) {
    let pattern = '';
  
    for (let j = 1; j <= i; j++) {
      pattern += '*';
    }
  
    console.log(pattern);                          //print the pattern
  }


//Q3. Write a JS program to print a Downward Triangle Pattern as shown below. 

const rows = 5;                                      // Specify the number of rows in the triangle

for (let i = rows; i >= 1; i--) {
  let pattern = '';

  for (let j = 1; j <= i; j++) {
    pattern += '*';
  }

  console.log(pattern);
}

//Q4. Write a JS program to print a Pyramid Pattern as shown below.

 for (let i = 1; i <= 5; i++) {
    var s = '';
    for (let j = 1; j <= 5 - i; j++) {
      s += ' ';
    }
    for (let j = 0; j < 2 * i - 1; j++) {
      s += '*';
    }
    console.log(s);
  }


  