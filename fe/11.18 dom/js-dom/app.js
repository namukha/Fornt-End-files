// document.body.addEventListener(`click`, () => {
//     if(document.body.style.backgroundColor === 'tomato'){
//         document.body.style.backgroundColor = '#d5e4ef';
//     } else {
//         document.body.style.backgroundColor = 'tomato';
//     }
// })

// const btnUpdate = document.getElementById("btn-main");
// const headLine = document.getElementById("headLine");
// const items = document.getElementById("LI");
// const highlight = document.getElementsByClassName("highlight")

// for(const element of highlight){
//     element.style.backgroundColor = 'yellow';
// }


const pushButton = document.getElementById("btn-main");

pushButton.addEventListener(`click`, () => {
    const headline = document.getElementById("headline");
    const inputMain = document.getElementsByClassName("input-main")[0].value;
    headline.innerHTML = inputMain;
})



const li = document.querySelectorAll('li');

for(let el of li){
    el.addEventListener(`click`, () => {
        if(el.className === ''){
            el.className = 'grow';
        } else {
            el.className = '';
        }
    })
}

const toggleBtn = document.getElementsByClassName('btn-toggle')[0];
const list = document.querySelector('.uList');

toggleBtn.addEventListener(`click`, ()=>{
    if(list.style.display === 'block'){
        list.style.display = 'none';
        toggleBtn.textContent = `Show List`;
    } else {
        list.style.display = 'block';
        toggleBtn.textContent = `Hide List`;
    }
})