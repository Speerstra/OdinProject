const dialog = document.querySelector("dialog");
const showButton = document.querySelector('.add-button');
const closeButton = document.querySelector("dialog button");

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
        dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
        dialog.close();
});


const myLibrary = [];

function Book(title, author, pages, is_read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.is_read = is_read;

        this.info = function() {
                return `${this.name} by ${this.author}, ${this.pages} pages`
        }
}

function addBookToLibrary() {
  // do stuff here
}