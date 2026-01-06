const myLibrary = [];

function Book(title, author, pages, read, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
    const id = crypto.randomUUID()
   myLibrary.push(new Book(title, author, pages, read, id))
}

addBookToLibrary('test', 'guy', 230, 'yes');