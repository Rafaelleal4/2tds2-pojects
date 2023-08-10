/*let personSimple = "John Doe"

const personObject = new Object();
personObject.firstName = "John";
personObject.lastName = "Doe";
personObject.age = 50;
personObject.eyeColor = "blue";

console.log(personSimple);
console.log(personObject);
*/

/*let personSimple = "John Doe";

const personObject = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

personObject.age = 10; // Mudando para 10

console.log(personSimple);
console.log(personObject);*/

/*class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Olá, meu nome é ${this.name} e tenho ${this.age} anos.`)
    }
}

const user1 = new User ('João', 30);
user1.introduce(); //Saída: Olá, meu nome é joão e tenho 30 anos.*/

class Pizza {
    constructor(base, sauce, toppings, cheese) {
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }

    getDescription() {
        return `A delicious pizza with ${this.base} base, ${this.sauce} sauce, ${this.toppings}  toppings and lots of cheese.`;
    }

    getTimerBase(){
        if(this.base == 'traditional'){
            return 10;
        }
        else if(this.base == 'integral'){
            return 15;
        }
        else{
            return 'This base does not exist!'
        }
    }

    getTimerCheese(){
        if(this.cheese == 'mozzarella'){
            return 5;
        }
        else if(this.cheese == 'catupiry'){
            return 7;
        }
        else{
            return 'This cheese does not exist!'
        }
    }

    getTimerSauce(){
        if(this.sauce == 'tomato'){
            return 6;
        }
        else if(this.sauce == 'pesto'){
            return 14;
        }
        else{
            return 'This sauce does not exist!'
        }
    }

    getTimerToppings(){
        if(this.toppings == 'pepperoni'){
            return 4;
        }
        else if(this.toppings == 'calabreza'){
            return 7;
        }
        else{
            return 'This topping does not exist!'
        }
    }
}

// Example usage
const myPizza = new Pizza('traditional', 'tomato', 'pepperoni', 'mozzarella');
console.log(myPizza.getDescription())
console.log('Time to cook the pizza = ' + myPizza.getTimerBase())

let timeTotalPizza = myPizza.getTimerBase() + myPizza.getTimerCheese() + myPizza.getTimerSauce() + myPizza.getTimerToppings();
console.log(timeTotalPizza)