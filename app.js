function Book(title,author,isbn) {
this.title = title;
this.author = author;
this.isbn = isbn;
}

document.getElementById("submit").addEventListener("submit", function (e) {
    // e.preventDefult()
    const title = document.getElementById("title").value;
    console.log(title);
});

