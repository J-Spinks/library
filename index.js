function Book(author, title, pages, readStatus) {
  this.author = author,
  this.title = title,
  this.pages = pages,
  this.readStatus = readStatus
};

let library = [];

function createNewBook(author, title, pages, readStatus) {
  const book = new Book(author, title, pages, readStatus);
  library.push(book);
};

const newBookBtn = document.getElementById("new-book-btn");
const cancelBookBtn = document.getElementById("cancel-book-btn");
const form = document.querySelector(".form-structure");

// toggle this later?
newBookBtn.addEventListener("click", (e) => {
  form.style.display = "block";
  newBookBtn.style.display = "none";
});

cancelBookBtn.addEventListener("click", (e) => {
  form.style.display = "none";
  newBookBtn.style.display = "block";
});


