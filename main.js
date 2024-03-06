console.log("Hello!")




const myLibrary = [];

function Book(Title, Author, Pages, Read) {
    this.Title = Title;
    this.Author = Author;
    this.Pages = Pages;
    this.Read = Read;

        //this.info = function(){
           // const status = this.read ? "read" : "not read yet";
          // return `${this.title} by ${this.author}, ${this.pages} pages, ${status}`
    }
  // the constructor...
}

// function for adding a new book to the array/library
function addBookToLibrary(Title, Author, Pages, Read) {
    let book = new Book(Title, Author, Pages, Read);
        myLibrary.push(book);
    }
  // do stuff here
