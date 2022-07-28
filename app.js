function Book(title,author,isbn) {
this.title = title;
this.author = author;
this.isbn = isbn;
}

function UI() {}

UI.prototype.addBook=function(mybook){
    const tableList = document.getElementById("book-list");
    const row = document.createElement("tr");
    row.innerHTML=`
    <td>${mybook.title}</td>
    <td>${mybook.author}</td>
    <td>${mybook.isbn}</td>
    <td>X</td>`

    tableList.appendChild(row);
}

UI.prototype.clearfield=function(){
    document.getElementById("title").value="";
    document.getElementById("author").value="";
    document.getElementById("isbn").value="";

}



// document.getElementById("book-form").addEventListener("submit", function(e) {
//     e.preventDefult();
//     const title = document.getElementById("title").value;
//     const author = document.getElementById("author").value;
//     const isbn = document.getElementById("isbn").value;
//     console.log(title, author, isbn);
// });

document.getElementById("book-form").addEventListener("submit",function(e){
    e.preventDefault();
    const title=document.getElementById("title").value;
    const author=document.getElementById("author").value;
    const isbn=document.getElementById("isbn").value;
    console.log(title,author,isbn)

    const MyBookList = new Book(title, author, isbn)
    console.log(MyBookList);

    const newUI = new UI();
    console.log(newUI);

    newUI.addBook(MyBookList)
    newUI.clearfield()

})
