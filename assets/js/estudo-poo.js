class Pessoa {
    constructor(id, name, age, email, phone) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.email = email;
        this.phone = phone;
    }
}

class ListaPessoas {
    constructor(){
        this.pessoas = [];
    }
    adicionar(pessoa){
        this.pessoas.push(pessoa)
    }
    remover(id){
        this.pessoas = this.pessoas.filter(pessoa => pessoa.id != id);
    }
    buscar(id){
        this.pessoas.forEach((pessoa) => {
            if(pessoa.id == id){
                return pessoa;
            }
        })
    }
    listar(id) {
       return this.pessoas;
    }

}

function randomId(){
    return Math.floor(Math.random() * 9998) + 1;
}

const listaPessoas = new ListaPessoas();

function criarPessoas() {
    const name = document.getElementById("userName").value;
    const age = document.getElementById("userAge").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    const pessoa = new Pessoa(randomId(), name, age, email, phone);

    listaPessoas.adicionar(pessoa);

    viewOnScreen();
    clearInputs();
    
}

function listarPessoas(){
    listaPessoas.listar(Pessoa)
}

function removerPessoas(id) {
    listaPessoas.remover(id)

    viewOnScreen();
}

function viewOnScreen() {
    let html = '';

    listaPessoas.pessoas.forEach((pessoa) => {
        html += `
        <div>
        <p>Id: ${pessoa.id}</p>
        <p>Nome: ${pessoa.name}</p>
        <p>Idade: ${pessoa.age}</p>
        <p>Email: ${pessoa.email}</p>
        <p>Telefone: ${pessoa.phone}</p>
        <button onclick="removerPessoas(${pessoa.id})">Remover</button>
        </div>`
    })
    document.getElementById("informações").innerHTML = html;
}

function clearInputs() {
    document.getElementById("userName").value = "";
    document.getElementById("userAge").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
}