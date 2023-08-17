// // const companies = ["Apple", "Google", "Facebook"];

// // companies.forEach(company => {
// //     console.log(`Hey, ${company}!`)
// // })

// const names = ["Whinds", "Freeway", "Teste", "Maria"];

// names.forEach((name) => {
//     console.log(`Hi, ${name}!`)
// })

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

console.log(numbers);

numbers.forEach((number, index) => {
    if (number % 2 == 0) {
        console.log(number)
        console.log(`O ${number} está na posição ${index}`)
    }
    
})