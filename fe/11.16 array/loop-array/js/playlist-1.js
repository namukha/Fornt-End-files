const playlist = [
  ['So What', 'Pink', '3:12'],
  ['Respect', 'Aretha Franklin', '2:30'],
  ['What a Wonderful World', 'Louis Armstrong', '2:17'],
  ['At Last', 'Beyonce', '3:03'],
  ['Three Little Birds', 'Bob Marley', '3:00'],
 [ 'The Way You Look Tonight', 'Frank Sinatra', '3:20']
];

for(i = 0; i < playlist.length; i++){
  document.querySelector("ol").innerHTML += `<li>${playlist[i][0]}, ${playlist[i][1]}, ${playlist[i][2]}</li>`
}
