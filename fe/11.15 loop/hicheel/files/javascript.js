function getRandomNumber(){
    let number = Math.floor(Math.random() * 10 + 1);
    return  number
}

// let counter = 0;
// while(counter < 100){
//     console.log(getRandomNumber())
//     counter += 1
// }


for (let counter = 0; counter < 10; counter++) {
    console.log(getRandomNumber())
}