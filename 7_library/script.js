
// ****************
// Query selection
const dialog = document.querySelector("dialog");
const openDialogButton = document.querySelector('.button-add-book');
const closeDialogButton = document.querySelector(".button-close-dialog");
const readButton = document.querySelector('.button-read-status')
const addForm = document.querySelector('.form-add-book')
const bookGrid = document.querySelector('.book-grid')
const cardDiv = document.querySelector('.card')


// ****************
// Event listeners

openDialogButton.addEventListener("click", () => {
        dialog.showModal();
});

closeDialogButton.addEventListener('click', () => {
        dialog.close();
});

readButton.addEventListener('click', () => {
        toggleReadStatus()
});

addForm.onsubmit = e => {
        e.preventDefault();
        newBook = createNewBook();
        console.log(newBook.info())
        library.addBook(newBook);
        console.log(library)
        clearBookGrid();
        displayBookGrid();
        dialog.close();
};


// ****************
// OBJECTS

// Library
function Library() {
        this.books = []
}

Library.prototype.getBook = function(bookId) {
        return this.books.find((book) => book.id === bookId)
}

Library.prototype.addBook  = function(newBook) {
        this.books.push(newBook)
}

Library.prototype.removeBook = function(bookId) {
        this.books = this.books.filter((book) => book.id !== bookId)
}

library = new Library()

// Book
function Book(id, title, author, pages, is_read) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.is_read = is_read;
};

Book.prototype.info = function() {
        return `Book ${this.id}: ${this.title} by ${this.author} (${this.pages} pages)`;
};

Book.prototype.toggleReadStatus = function() {
        return 'Read status updated!'
}


// ****************
// DOM manipulations
function createCardHTML(book) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.id = book.id;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('button-delete');
        deleteButton.textContent = 'X';
        card.append(deleteButton)

        deleteButton.addEventListener('click', function(event) {
                event.stopPropagation(); 
                library.removeBook(book.id);
                displayBookGrid();
        });

        const cardTitle = document.createElement('h2');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = book.title;
        card.append(cardTitle)

        const cardAuthor = document.createElement('p');
        cardAuthor.classList.add('card-author');
        cardAuthor.textContent = book.author;
        card.append(cardAuthor)

        const cardPages = document.createElement('p');
        cardPages.classList.add('card-pages');
        cardPages.textContent = book.pages;
        card.append(cardPages)

        const cardReadStatus = document.createElement('button');
        cardReadStatus.classList.add('button-read-status');
        cardReadStatus.innerText = book.is_read
        card.append(cardReadStatus)

        bookGrid.append(card)
}

function clearBookGrid() {
        bookGrid.innerHTML = '';
}

function displayBookGrid () {
        clearBookGrid();
        for (let book of library.books) {
                createCardHTML(book)
        }
}

function createNewBook() {
        const id = library.books.length;
        const title = document.querySelector('#input-title').value;
        const author = document.querySelector('#input-author').value;
        const pages = document.querySelector('#input-pages').value;
        const readStatus = document.querySelector('#input-read-status').checked;

        return new Book(id, title, author, pages, readStatus);
};
