const posts = [];

function savesPost() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const resumo = document.getElementById("resumo").value;
    const author = document.getElementById("author").value;
    const date = document.getElementById("date").value;

    
    if(title && category && resumo && author && date) {
        storePosts(title, category, resumo, author, date)
        cleanFields();
        showPosts();
    } else{
        alert("Preencha todos os campos!")
    }
    
}

function cleanFields() {
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("resumo").value = "";
    document.getElementById("author").value = "";
    document.getElementById("date").value = "";
}

function storePosts(title, category, resumo, author, date) {
    const post = {
        title: title,
        category: category,
        resumo: resumo,
        author: author,
        date: date,
    };
    posts.push(post)

    console.log(posts)
}

function showPosts() {
    let showContent = "";

    posts.forEach((post, index) => {
        showContent += `
        <div class="itemPost">
        <h2>${post.title}</h2>
        <p><strong>Categoria: </strong>${post.category}</p>
        <p><strong>Resumo: </strong>${post.resumo}</p>
        <p><strong>Autor: </strong>${post.author}</p>
        <p><strong>Data de publicação: </strong>${post.date}</p>

        <button onclick="editPost(${index})">Editar</button>
        <button onclick="deletePost(${index})">Excluir</button>
        </div>
        `;
    });
    document.getElementById("list").innerHTML = showContent
}

