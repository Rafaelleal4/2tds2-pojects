const posts = [];

function savesPost() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const resume = document.getElementById("resumo").value;
    const author = document.getElementById("author").value;
    const date = document.getElementById("date").value;

    
    if(title && category && resume && author && date) {
        storePosts(title, category, resume, author, date)
    } else{
        alert("Preencha todos os campos!")
    }
    cleanFields()
}

function cleanFields() {
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("resumo").value = "";
    document.getElementById("author").value = "";
    document.getElementById("date").value = "";
}

function storePosts(title, category, resume, author, date) {
    const post = {
        title: title,
        category: category,
        resume: resume,
        author: author,
        date: date,
    };
    posts.push(post)

    console.log(posts)
}

