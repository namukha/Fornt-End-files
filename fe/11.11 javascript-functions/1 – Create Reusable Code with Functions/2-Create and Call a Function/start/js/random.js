// const randomNumber = Math.floor( Math.random() * 6 ) + 1;

const randomNumber = (upper) => {
    const randomNumber = Math.floor( Math.random() * (upper)) + 1;
    console.log(randomNumber(100))
}
