var paragraph = document.querySelector("main")
const xyzExp = function(x, y, z){
    const hurtver = z*z + x*x + y*y
    const huvaari = z + x + y
    return hurtver/huvaari
}
console.log(xyzExp(1, 2, 3))
paragraph.innerHTML = `<p>Your answer is ${xyzExp(1, 2, 3)}</p>`




// function xyzDec(a, b, c) {
//     const hurtver1 = a*a + b*b + c*c
//     const huvaari1 = a + b + c
//     return hurtver1/huvaari1
// }
// console.log(xyzDec(1, 2, 3))