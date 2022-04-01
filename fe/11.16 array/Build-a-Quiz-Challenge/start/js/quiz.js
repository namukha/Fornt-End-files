// 1. Create a multidimensional array to hold quiz questions and answers

const quiz = [
  ['What\'s 2+2?', '4'],
  ['What\'s tha capital city of Japan?', 'Tokyo'],
  ['What does HTML stand for?', 'Hyper text markup language'],
  ['Who\'s the president of Mongolia?', 'Khurelsuh'],
  ['What\'s 1+1?', '3'],
  ['What\'s 1+1?', '3'],
  ['What\'s 1+1?', '3'],
  ['What\'s 1+1?', '3'],
  ['What\'s 1+1?', '3'],
  ['What\'s 1+1?', '3'],
  ['What\'s 1+1?', '3'],
  ['What\'s 1+1?', '3']
]

// 2. Store the number of questions answered correctly

let score = 0;
let message;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/

for(i = 0; i < quiz.length; i++){
  let question = quiz[i][0];
  let answer = quiz[i][1];
  let response = prompt(question); 
  if(response == answer){
    score += 1;
  }

}


// 4. Display the number of correct answers to the user

  document.querySelector("main").innerHTML = `<h1>You've got ${score} points out of ${quiz.length}.</h1>`
