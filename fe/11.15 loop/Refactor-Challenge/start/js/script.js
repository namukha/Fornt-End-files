let html = '';
let randomValue = (min, max) => Math.floor(Math.random() * max) + min ;
let randomRGB = () => `rgb( ${randomValue(60, 150)}, ${randomValue(60, 30)}, ${randomValue(20, 30)} )`
for(i = 1; i <= 100; i++){
    html += `<div style="background-color: ${randomRGB()}">${i}</div>`;
}
document.querySelector('main').innerHTML = html;
