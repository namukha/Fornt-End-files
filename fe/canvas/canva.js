const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

 
let wave = {
    y: canvas.height/2,
    amp: 40,
    length: 0.01,
    freq: 0.1
}
let increment = wave.freq;
function animation () {
    requestAnimationFrame(animation)
    ctx.fillStyle = '#fff'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2);
    
    for(let i=0; i<canvas.width; i++){
        ctx.lineTo(i, canvas.height/2 + Math.sin(i * wave.length + increment) * wave.amp );
    }
    ctx.strokeStyle = 'red'
    ctx.stroke();

    increment += wave.freq
}

animation();