const person = {
  name: 'Edward',
  nickname: 'Duke',
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

const testObject = Object.values(person)
console.log(testObject)

// for( let prop in person ){
//   console.log(`${prop} : ${person[prop]}`)
// }