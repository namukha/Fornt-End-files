const person = {
    firstName: 'Namuun',
    city: 'Ulaanbaatar',
    isStudent: true,
    skills: ['coding', 'drawing']
}

const message = `Hey! My name's ${person.firstName}. I live in ${person.city = "UB"}. My hobby is ${person.skills.join(", dancing, ")}`
document.querySelector("main").innerHTML = message