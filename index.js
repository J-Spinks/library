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

createNewBook("test", "test", 100, false);
createNewBook("test", "test", 2000, true);

