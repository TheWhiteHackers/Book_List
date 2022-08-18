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
    <td class="table-info">${mybook.title}</td>
    <td class="table-light">${mybook.author}</td>
    <td class="table-info">${mybook.isbn}</td>
    <td class="delete">X</td>`

    tableList.appendChild(row);
    const newUI = new UI();
    newUI.message("book added", "sucess");
}

UI.prototype.message=function(message, className){
 console.log(message, className);   
 let div = document.createElement("div");
 div.className=`alert $(className)`;
 let mymessage= document.createTextNode(message);
 div.appendChild(mymessage);
 let container= document.querySelector(".col");
 let table= document.querySelector(".table");
 container.insertBefore(div, table);
 setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);

}

UI.prototype.clearfield=function(e){
    document.getElementById("title").value="";
    document.getElementById("author").value="";
    document.getElementById("isbn").value="";
    
}

UI.prototype.deletebook=function(target){
    if (target.className === "delete") {
        target.parentElement.remove();
    }
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


document.getElementById("book-list").addEventListener("click", function(e){
    const newUI = new UI();
    newUI.deletebook(e.target)
    newUI.message("book deleted", "error");
    console.log(e.class);

})


















