const container = document.querySelector('.books-container');
const dialog = document.querySelector('dialog');
const newBook = document.querySelector('.new-book');
const closeButton = document.querySelector('.close-button');
const submitButton = document.querySelector('.submit-button');

const form = document.querySelector('form');

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
addBookToLibrary('test2', 'gal', 330, 'no');

function displayBook() {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        let detailList = document.createElement('ul');
        for (const property in myLibrary[i]) {
            if (property !== 'id') {
                let bookDetail = document.createElement('li');
                bookDetail.textContent = `${property} : ${myLibrary[i][property]}`
                detailList.appendChild(bookDetail);
            }
        }
        card.appendChild(detailList)

        container.appendChild(card);
    }
}

displayBook();

newBook.addEventListener('click', () => {
    dialog.showModal();
})

closeButton.addEventListener('click', () => {
    dialog.close();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read');

    addBookToLibrary(title.value, author.value, pages.value, read.value);
    
    title.value = '';
    author.value = '';
    pages.value = '';
    read.value = '';
    
})