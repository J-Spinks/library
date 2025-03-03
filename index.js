function Book(author, title, pages, readStatus) {
  this.author = author,
  this.title = title,
  this.pages = pages,
  this.readStatus = readStatus
};

const book1 = new Book("Ian Flemming", "James Bond", 100, false)
const book2 = new Book("JRR Tolkien", "Fellowship of the ring", 800, false)
const book3 = new Book("JRR Tolkien", "Fellowship of the ring", 800, false)


const library = [];

function createNewBook(author, title, pages, readStatus) {
  const book = new Book(author, title, pages, readStatus);
  library.push(book);
  printLibrary();
};

Book.prototype.updateReadStatus = function() {
  this.readStatus = !this.readStatus
}

const newBookBtn = document.getElementById("new-book-btn");
const cancelBookBtn = document.getElementById("cancel-book-btn");
const form = document.querySelector(".form-structure");
const libraryContainer = document.getElementById("lib-container");
const submitBtn = document.getElementById("submit-btn");
const formData = document.getElementById("form-data")



// toggle this later?
newBookBtn.addEventListener("click", (e) => {
  form.style.display = "block";
  newBookBtn.style.display = "none";
});

cancelBookBtn.addEventListener("click", (e) => {
  form.style.display = "none";
  newBookBtn.style.display = "block";
});

function printLibrary(){
  libraryContainer.innerHTML = "";

  library.forEach((book, index) =>{
    const bookDiv = document.createElement("div");
    const updateBtn = document.createElement("button");
    const deleteBookBtn = document.createElement("button");

    deleteBookBtn.classList.add("deleteBtn");
    deleteBookBtn.textContent = "Delete";

    updateBtn.classList.add("updateBtn");
    updateBtn.textContent = "Update read status";

    bookDiv.classList.add("book");
    bookDiv.classList.add(`id-${index}`);

    const author = document.createElement("p");
    author.classList.add("author");
    author.innerText = `Author: ${book.author}`;

    const title = document.createElement("p");
    title.classList.add("title");
    title.innerText = `Title: ${book.title}`;

    const pages = document.createElement("p");
    pages.classList.add("pages");
    pages.innerText = `Pages: ${book.pages}`;

    const read = document.createElement("p");
    read.classList.add("read");
    read.innerText = `Read: ${book.readStatus ? "Yes" : "No"}`;





    bookDiv.appendChild(author);
    bookDiv.appendChild(title);
    bookDiv.appendChild(pages);
    bookDiv.appendChild(read);
    bookDiv.appendChild(updateBtn);
    bookDiv.appendChild(deleteBookBtn);
    libraryContainer.appendChild(bookDiv);

    deleteBookBtn.addEventListener("click", () => {
      library.splice(index, 1);
      printLibrary();
    });

    updateBtn.addEventListener("click", () => {
      book.updateReadStatus();
      printLibrary();
    })

  });
}

formData.addEventListener("submit", (e) => {
  e.preventDefault();
  const author = document.getElementById("author-input").value;
  const title = document.getElementById("title-input").value;
  const pages = document.getElementById("pages-input").value;
  const readStatus = document.getElementById("read-input").value;
  createNewBook(author, title, pages, readStatus);
});
