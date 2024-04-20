
// ****************
// Query selection
const dialog = document.querySelector("dialog");
const addButton = document.querySelector('.add-button');
const closeButton = document.querySelector("dialog button");
const readButton = document.querySelector('.button-read-status')
const addForm = document.querySelector('.form-add-book')
const inputTitle = document.querySelector('#input-title')
const inputAuthor = document.querySelector('#input-author')
const inputPages = document.querySelector('#input-pages')
const inputReadStatus = document.querySelector('#input-read-status')
const bookGrid = document.querySelector('.book-grid')


// ****************
// Event listeners
addButton.addEventListener("click", () => {
        inputTitle.value = ''
        inputAuthor.value = ''
        inputPages.value = ''
        inputReadStatus.checked = false;
        dialog.showModal();
});

closeButton.addEventListener('click', () => {
        dialog.close();
});

addForm.onsubmit = e => {
        e.preventDefault();
        addBookToLibrary();
        displayBooks();
        dialog.close();
};

readButton.addEventListener('click', () => {
        
});

// ****************
// Objects
const library = [];

function Book(title, author, pages, is_read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.is_read = is_read;
};

Book.prototype.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
};


// ****************
// Functions
function displayBooks() {
        for (var i=0; i<library.length; i++) { 
                let book = library[i];
                const card = document.createElement("div");
                card.classList.add('card');

                const deleteButton = document.createElement("button");
                deleteButton.classList.add('button-delete');
                deleteButton.innerHTML = 'X'
                card.append(deleteButton)

                const cardTitle = document.createElement("div");
                cardTitle.classList.add('card-title');
                cardTitle.innerText = book.title
                card.append(cardTitle)

                const cardAuthor = document.createElement("div");
                cardAuthor.classList.add('card-author');
                cardAuthor.innerText = book.author
                card.append(cardAuthor)

                const cardPages = document.createElement("div");
                cardPages.classList.add('card-pages');
                cardPages.innerText = book.pages
                card.append(cardPages)

                const cardReadStatus = document.createElement("div");
                cardReadStatus.classList.add('card-read-status');
                cardReadStatus.innerText = book.is_read
                card.append(cardReadStatus)

                bookGrid.append(card)

        }
}

function addBookToLibrary() {
        let newBook = new Book(
                title=inputTitle.value, 
                author=inputAuthor.value, 
                pages=inputPages.value, 
                is_read=inputReadStatus.value
                );
        console.log(newBook.info())
        library.push(newBook)
};

