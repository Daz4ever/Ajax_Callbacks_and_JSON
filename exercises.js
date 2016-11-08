// 1) Given the following functions in continuation passing style:

function times2(arr, callback) {
  var result = arr.map(function(num) {
    return num * 2;
  });
  callback(result);
}
function sumArray(arr, callback) {
  var result = arr.reduce(function(a, b) {
    return a + b;
  });
  callback(result);
}
// And an array:

var array = [1, 8, 2, 5];
// Use the two functions together to first double the numbers in the array, sum them up and then print out the sum.
function sumDoubledNumbers(arr, callback) {
  var result = arr.map(function(num) {
    return num * 2;
  }).reduce(function(total, number){
    return total + number;
  }, 0);
    callback(result);
  }
}

sumDoubledNumbers(array, function(result){
  console.log(result);
});

// 2) Given the function below which returns the largest element in an array:

function max(arr) {
  return arr.reduce(function(a, b) {
    return a > b ? a : b;
  });
}
// Write a version of this function in continuation-passing style.
// Add a delay to your CPS-style max function using setTimeout to make it into an asynchronous function.

function max(arr, callback) {
  var theMax = arr.reduce(function(a, b) {
    return a > b ? a : b;
  });
  setTimeout (function() {
    callback(theMax);
  }, 1000);
}

max(array, function(result){
  console.log(result);
});



// Ajax, Callback, and JSON Exercises
//
// CPS: 1
//
// Rewrite the following code (both the function and the code calling the function) in continuation-passing style:
//
function square(num) {
  return num * num;
}

var squared = square(5);
//

function square(num, callback) {
  var theSquare = num * num;
  callback(theSquare);
}

square(5, function(theSquare) {
  console.log(theSquare);

});

// 1.5) Rewrite the following code (both of the functions and the calling code) in CPS:

function square(num) {
  return num * num;
}

function times2(num) {
  return num * 2;
}

var squared = square(5);
var result = times2(squared);
console.log('Result is:', result);

//-------------------------------------

function square(num, callback) {
  callback(num * num);
}

function times2(num, callback) {
callback(num * 2);
}

square(5, function(sq) {
  times2(sq, function(answer) {
    console.log(answer)
  })
})

// Rewrite the following code (both of the functions and the calling code) in CPS:

function square(num) {
  return num * num;
}

function squareRoot(num) {
  return Math.sqrt(num);
}

var x = 4;
var y = 3;
var xSquared = square(x);
var ySquared = square(y);
var answer = squareRoot(xSquared + ySquared);
console.log('The answer is: ' + answer);

//------------------------------
function square(num, callback) {
  setTimeout (function() {
    callback(num * num);
  }, 1000)
}

function squareRoot(num, callback) {
  setTimeout (function() {
    callback(Math.sqrt(num));
  }, 500)
}

square(x, function(xsq){
  square(y, function(ysq) {
    squareRoot((xsq + ysq), function(answer){
      console.log(answer)
    })
  })
})
