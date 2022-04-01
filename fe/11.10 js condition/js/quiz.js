// /* 
//   1. Store correct answers
//    - When quiz begins, no answers are correct
// */

// var point = 0;

// // 2. Store the rank of a player

// var rank ;

// // 3. Select the <main> HTML element

// let main = document.querySelector("main");

// /*
//   4. Ask at least 5 questions
//    - Store each answer in a variable
//    - Keep track of the number of correct answers
// */

// var q1 = prompt("What is 2 + 2?").toLowerCase();
// if(q1 == "4"){
//   point += 1 ;
// }

// var q2 = prompt("What's the capital city of Japan?").toLowerCase();
// if(q2 == "tokyo"){
//   point += 1 ;
// }

// var q3 = prompt("What does HTML stand for?").toLowerCase();
// if(q3 == "hyper text markup language"){
//   point += 1 ;
// }

// var q4 = prompt("Name the shortest month of the year.").toLowerCase();
// if(q4 == "february"){
//   point += 1 ;
// }

// var q5 = prompt("How many continents are there?").toLowerCase();
// if(q5 == "5"){
//   point += 1 ;
// }

// /*
//   5. Rank player based on number of correct answers
//    - 5 correct = Gold
//    - 3-4 correct = Silver
//    - 1-2 correct = Bronze
//    - 0 correct = No crown
// */

// if(point == 5){
//   rank = `<div class="gold">Gold</div>` ;
// } else if( point == 3 || point ==4 ){
//   rank = `<div class="silver">Silver</div>` ;
// } else if( point == 1 || point == 2 ){
//   rank = `<div class="bronze">Bronze</div>` ;
// } else {
//   rank = `<div class="nocrown">No crown</div>` ;
// }

// // 6. Output results to the <main> element

// var msg = `<p>You got ${point} out of 5.</p><h1>Your rank : ${rank}</h1>`
// main.innerHTML = msg ;

var too = parseInt()
var too1 = parseFloat()
var niilber = too + too1

console.log(niilber)