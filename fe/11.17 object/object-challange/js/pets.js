/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/

const pet = [
  {
    nameOfPet: `Andy`,
    breed: `Dog | Australian shepherd`,
    age: `Age: 3`,
    photo: `img/aussie.jpg`,
    link: `https://en.wikipedia.org/wiki/Australian_Shepherd`
  },
  {
    nameOfPet: `Wendy`,
    breed: `Dog | Dachshund`,
    age: `Age: 2`,
    photo: `img/dachshund.jpg`,
    link: `https://en.wikipedia.org/wiki/Dachshund`
  },
  {
    nameOfPet: `Lindy`,
    breed: `Dog | Golden Retriever`,
    age: `Age: 3`,
    photo: `img/golden.jpg`,
    link: `https://en.wikipedia.org/wiki/Golden_Retriever`
  },
  {
    nameOfPet: `Katy`,
    breed: `Cat | Persian cat`,
    age: `Age: 4`,
    photo: `img/persian.jpg`,
    link: `https://en.wikipedia.org/wiki/Persian_cat`
  },
  {
    nameOfPet: `Mary`,
    breed: `Dog | Pug`,
    age: `Age: 6`,
    photo: `img/pug.jpg`,
    link: `https://en.wikipedia.org/wiki/Pug`
  },
  {
    nameOfPet: `Rainy`,
    breed: `Cat | Tabby`,
    age: `Age: 3`,
    photo: `img/tabby.jpg`,
    link: `https://en.wikipedia.org/wiki/Tabby_cat`
  }
]

for(let i=0; i < pet.length; i++){
  let nameOfPet = `<h2>${pet[i].nameOfPet}</h2>`;
  let breed = `<h3>${pet[i].breed}</h3>`;
  let age = `<h3>${pet[i].age}<h3>`;
  let photo = `<img src="${pet[i].photo}" alt="">`
  document.querySelector('main').innerHTML += `<a href="${pet[i].link}">${nameOfPet}${breed} ${age} ${photo}</a>`
}