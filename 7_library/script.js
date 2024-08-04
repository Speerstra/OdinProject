// ****************
// Query selectors
const dialog = document.querySelector("dialog");
const openDialogButton = document.querySelector(".button-add-book");
const closeDialogButton = document.querySelector(".button-close-dialog");
const readButton = document.querySelector(".button-read-status");
const addForm = document.querySelector(".form-add-book");
const bookGrid = document.querySelector(".book-grid");
const cardDiv = document.querySelector(".card");
const titleInput = document.querySelector("#input-title");
const authorInput = document.querySelector("#input-author");
const pagesInput = document.querySelector("#input-pages");
const isReadInput = document.querySelector("#input-read-status");

const titleError = document.querySelector("#title-error");
const authorError = document.querySelector("#author-error");

// ****************
// Event listeners
window.addEventListener("load", () => {
  reloadBookGrid();
});

openDialogButton.addEventListener("click", () => {
  dialog.showModal();
});

closeDialogButton.addEventListener("click", () => {
  dialog.close();
});

addForm.onsubmit = (e) => {
  e.preventDefault();
  newBook = createBookfromInput();
  console.log(newBook.info());
  library.addBook(newBook);
  clearForm();
  reloadBookGrid();
  dialog.close();
};

titleInput.addEventListener("blur", () =>
  validateInput(titleInput, titleError)
);
authorInput.addEventListener("blur", () =>
  validateInput(authorInput, authorError)
);

// ****************
// Objects

// Library
function Library() {
  this.books = [];
}

Library.prototype.addBook = function (newBook) {
  this.books.push(newBook);
};

Library.prototype.removeBook = function (bookId) {
  this.books = this.books.filter((book) => book.id !== bookId);
};

// Book
function Book(id, title, author, pages, isRead) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.info = function () {
  return `Book ${this.id}: ${this.title} by ${this.author} (${this.pages} pages)`;
};

Book.prototype.toggleReadStatus = function () {
  this.isRead = !this.isRead;
};

let bookId = 0;

function validateInput(input, error) {
  if (input.validity.valid) {
    error.textContent = ""; // Clear any previous error messages
  } else {
    if (input.validity.valueMissing) {
      error.textContent = "This field is required.";
    } else if (input.validity.tooShort) {
      error.textContent = `Input too short. Minimum length is ${input.minLength} characters.`;
    }
  }
}

function createBookfromInput() {
  const id = bookId++;
  const title = document.querySelector("#input-title").value;
  const author = document.querySelector("#input-author").value;
  const pages = document.querySelector("#input-pages").value;
  const isRead = document.querySelector("#input-read-status").checked;

  return new Book(id, title, author, pages, isRead);
}

// ****************
// DOM manipulation
function createCardHTML(book) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.id = book.id;

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("button-delete");
  deleteButton.textContent = "X";
  card.append(deleteButton);

  deleteButton.addEventListener("click", function (e) {
    e.stopPropagation();
    library.removeBook(book.id);
    reloadBookGrid();
  });

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = book.title;
  card.append(cardTitle);

  const cardAuthor = document.createElement("div");
  cardAuthor.classList.add("card-author");
  cardAuthor.textContent = `by ${book.author}`;
  card.append(cardAuthor);

  const cardPages = document.createElement("div");
  cardPages.classList.add("card-pages");
  cardPages.textContent = `${book.pages} pages`;
  card.append(cardPages);

  const cardIsRead = document.createElement("button");
  cardIsRead.classList.add("button-read-status");
  cardIsRead.classList.add(book.isRead ? "read" : "unread");
  cardIsRead.textContent = book.isRead ? "Read" : "Unread";
  card.append(cardIsRead);

  cardIsRead.addEventListener("click", function (e) {
    e.stopPropagation();
    book.toggleReadStatus();
    reloadBookGrid();
  });

  bookGrid.append(card);
}

function clearBookGrid() {
  bookGrid.innerHTML = "";
}

function reloadBookGrid() {
  clearBookGrid();
  for (let book of library.books) {
    createCardHTML(book);
  }
}

function clearForm() {
  document.querySelector("#input-title").value = "";
  document.querySelector("#input-author").value = "";
  document.querySelector("#input-pages").value = "";
  document.querySelector("#input-read-status").checked = false;
}

// ****************
// Instantiate a library with a few books
library = new Library();

library.addBook(
  new Book(bookId++, "To Kill a Mockingbird", "Harper Lee", 336, true)
);
library.addBook(
  new Book(bookId++, "The Fellowship of the Ring", "J.R.R. Tolkien", 432, false)
);
