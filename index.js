function Book(author, title, pages, readStatus) {
  this.author = author,
  this.title = title,
  this.pages = pages,
  this.readStatus = readStatus
};

const book1 = new Book("Ian Flemming", "James Bond", 100, false)
const book2 = new Book("JRR Tolkien", "Fellowship of the ring", 800, true)


let library = [book1, book2];

function createNewBook(author, title, pages, readStatus) {
  const book = new Book(author, title, pages, readStatus);
  library.push(book);
};

const newBookBtn = document.getElementById("new-book-btn");
const cancelBookBtn = document.getElementById("cancel-book-btn");
const form = document.querySelector(".form-structure");
const libraryContainer = document.getElementById("lib-container");



// toggle this later?
newBookBtn.addEventListener("click", (e) => {
  form.style.display = "block";
  newBookBtn.style.display = "none";
});

cancelBookBtn.addEventListener("click", (e) => {
  form.style.display = "none";
  newBookBtn.style.display = "block";
});

// for (let i = 0; i < library.length; i++) {
//   const book = document.createElement("div");
//   book.classList.add("book");
//   const author = document.createElement("p");
//   author.classList.add("author")
//   book.value = `${library[i].author}`
//   libraryContainer.appendChild(book)
// }

library.forEach((book, index) =>{
  const bookDiv = document.createElement("div");
  const updateBtn = document.createElement("button")
  updateBtn.classList.add("updateBtn");
  updateBtn.textContent = "Update read status"
  bookDiv.classList.add("book");
  bookDiv.classList.add(`id${index + 1}`);
  const author = document.createElement("p");
  author.classList.add("author");
  const title = document.createElement("p");
  title.classList.add("title");
  const pages = document.createElement("p");
  pages.classList.add("pages");
  const read = document.createElement("p");
  read.classList.add("read");
  author.innerText = `Author: ${book.author}`;
  title.innerText = `Title: ${book.title}`;
  pages.innerText = `Pages: ${book.pages}`;
  read.innerText = `Read: ${
    book.read ? "Yes" : "No"
  }`;
  bookDiv.appendChild(author);
  bookDiv.appendChild(title);
  bookDiv.appendChild(pages);
  bookDiv.appendChild(read);
  bookDiv.appendChild(updateBtn);
  libraryContainer.appendChild(bookDiv)

});
