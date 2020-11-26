class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById("book-list");
    //create table row(tr)  element
    const row = document.createElement("tr");
    row.className = "delete-item item";
    //insert columns (td)
    row.innerHTML = `<td> ${book.title} </td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href = "" class = "delete">X</a></td>`;

    list.appendChild(row);
  }
  showAlert(message, className) {
    const errorDiv = document.createElement("div");
    errorDiv.className = `alert ${className}`;


   

    const firstDiv = document.querySelector(".before-this");
    const container = document.querySelector("#book-form");

    errorDiv.appendChild(document.createTextNode(message));

    container.insertBefore(errorDiv, firstDiv);

    setTimeout(function() {
      document.querySelector(".alert").remove();
    },2000);
  }
  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

//Event listeners

document.getElementById("book-form").addEventListener("submit", function(e) {
  //Get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  //instantiate book

  const book = new Book(title, author, isbn);

  //instantiate UI
  const ui = new UI();

  //validate
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("please fill in all the fields", "error");
  } else {
    //add book to list
    ui.addBookToList(book);

    //show success
    ui.showAlert("Book Added!", "success");
    //Clear all the fields
    ui.clearFields();
  }

  e.preventDefault();
});

const bookList = document.getElementById("book-list");

bookList.addEventListener("click", function(e) {
  //instantiate UI
  const ui = new UI();

  ui.deleteBook(e.target);
  ui.showAlert("Book Removed!", "success");
  e.preventDefault();
});
