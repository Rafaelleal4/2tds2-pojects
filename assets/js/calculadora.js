/*class Calculator {
    add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
    subtract(a, b) {
        return a - b;
    }
    division(a, b) {
        return a / b;
    }
}

//Example usage
const calculator = new Calculator();

const sumResult = calculator.add(5, 3);
console.log("Sum", sumResult); // Output: Sum: 8

const multplicationResult = calculator.multiply(4, 2);
console.log("Multplication", multplicationResult); // Output: Multplication: 8

const subtractionResult = calculator.subtract(10, 4);
console.log("Sutraction", subtractionResult); // Output: Subtraction: 6

const divisionResult = calculator.division(20, 2);
console.log("Division", divisionResult); // Output: Division: 10*/

class Witch {
    constructor(name, patron, house, colorEyes){
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.colorEyes = colorEyes;
    }

    getName() {
        return `O nome do bruxo(a) é: ${this.name}`; 
    }
    getPatron() {
        return `Seu patrono é: ${this.patron}`; 
    }
    getHouse() {
        return `Ele(a) é da casa: ${this.house}`; 
    }
    getColorEyes() {
        return `A cor dos olhos dele(a) é: ${this.colorEyes}`; 
    }    
}

const witch1 = new Witch('Harry Potter', 'Deer', 'Gryffindor', 'green')
console.log(witch1.getName())

class TypeWitch extends Witch {
    constructor(name, patron, house, colorEyes, typeWitch){
        super(name, patron, house, colorEyes)
        this.typeWitch = typeWitch;
    }

    getTypeWitch() {
        if(this.typeWitch === 'P') {
            return "Este bruxo é sangue puro"
        }else if(this.typeWitch === 'M') {
            return "Este bruxo é mestiço"
        }else {
            return "Este é um trouxa"
        }
    }
}

const harry = new TypeWitch('Harry Potter', 'Cervo', 'Sonserina', 'Verde/Azul', 'M');
console.log(harry.getTypeWitch())

/*class CamaraSecreta {
    constructor(name, pwd) {
        this.name = name;
        let _pwd = pwd; //Atributo privado.

        //Metodo privado, mas não no js
        this.verifyPwd = (pwdInput) => {
            return pwdInput == _pwd // True or False
        };
        //Metodo privado, mas não no js
        this.acessToChamber = () => {
            let pwdInput = prompt("Write the password!")
            if (this.verifyPwd(pwdInput)) {
                console.log(`Welcome to the Secret Chamber`)
            } else {
                console.log("You don't have the password Trouxa")
            }
        };
    }

    showName() {
        console.log(`Nome do bruxo: ${this.name}`)
    }
}

const myAccess1 = new ChamberOfSecrets('Harry Potter', 'Senha123')
myAccess1.showName();

myAccess1.name = "hp";
myAccess1.pwd = "123";

myAccess1.acessToChamber(); //Na teoria não deveria funcionar*/