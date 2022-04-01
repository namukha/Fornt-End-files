const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;
let order = inStock.indexOf(search) + 1 ;
if(search == ''){
    message = `<p>We have : ${inStock.join(`, `)}</p>`
} else if (inStock.includes(search)){
    message = `<h1>Yes, we have ${search}</h1><p>This is our ${order}th product.`; 
} else {
    message = `<h1>Sorry, we don't have ${search}</h1>`;
}

document.querySelector("main").innerHTML = message