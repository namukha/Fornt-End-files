const chess = [
    ['', '1', '2', '3', '4', '5', '6', '7', '8'],
    ['a', '&#9814', '2', '3', '4', '5', '6', '7', '&#9814'],
    ['b', '♙', '2', '3', '4', '5', '6', '7', '8'],
    ['c', '', '2', '3', '4', '5', '6', '7', '8'],
    ['d', '', '2', '3', '4', '5', '6', '7', '8'],
    ['e', '', '2', '3', '4', '5', '6', '7', '8'],
    ['f', '', '2', '3', '4', '5', '6', '7', '8'],
    ['g', '', '2', '3', '4', '5', '6', '7', '8'],
    ['h', '', '2', '3', '4', '5', '6', '7', '8']
]

let content = "<tr>"

for(i = 0; i < chess.length; i++){
    const row = chess[i];
    for(j = 0; j < row.length; j++){
        if(i == 0){

            content += `<td>${chess[0][j]}</td>`

        } else if(j == 0){

            content += `<td>${chess[i][0]}</td>`

        } else if(i%2 !== 0){

                if(j%2 !== 0){
                    content += `<td class="black withBorder">${chess[i][j]}</td>`
                } else {
                    content += `<td class="withBorder">${chess[i][j]}</td>`
                }

        } else {
                if(j%2 == 0){
                    content += `<td class="black withBorder">${chess[i][j]}</td>`
                } else {
                    content += `<td class="withBorder">${chess[i][j]}</td>`
                }
        }
    }
    content += "</tr>"
}

document.querySelector("#tableJ").innerHTML = content