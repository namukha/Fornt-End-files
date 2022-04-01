// const main = document.querySelector('main');
// for (let counter = 1; counter < 11; counter++) {
//     main.innerHTML += `<div>${counter}</div>`
// }

const secretWord = "shat";
let msg = "Access Denied ;(";

for(i = 5; i >= 1; i--){
    let guess = prompt(`Enter the secret word. You have ${i} tries`)
    if(guess == secretWord){
        msg = "Welcome to the secret world!";
        break;
    }
}
alert(msg)
