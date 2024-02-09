class Book {
    constructor (title, author, available=true) {
        this.title = title;
        this.author = author;
        this.available = available;

    }
}
const library = {
    books: [],

    addBook: function (title, author) {
        const book = new Book (title,author);
        this.books.push(book);
        console.log(`Added "${book.title}" by ${book.author} to the library! There are now ${this.book.length} books in the library's database. `);
    },

    checkOutBook: function(title) {
      //  try { 
            let found = false;
        for (let book of this.book) {
            if (book.title === title && book.available) {
                found = true;
                book.available = false;
                console.log (`Checked out: ${book.title}`)
                break;
            }
        } //if (!found) throw new Error (`THe book: "${title}"was not found or already checked out.`);
   // } catch (error) {
   //     console.error(error.message);
  //  }
    },

    getAvailableBooks: function () {
        let bookList = []
        for (let book of this.books) {
            if (book.available) {
                bookList.push(book.title);
            }
        }
        console.log (`There are ${book.List.length} titles currently on the shelf: ${bookList.join(",")}`)
    }
}

const newBooks= 
    `[



    ]`;

    function receiveBooks (bookData) {
        console.log(`Adding new books to our shelves!`); 
        const bookstoAdd = JSON.parse (bookData);
        for (let book of booksToAdd) {
            library.addBook(book.title,book.author);
        }


    }

 // Tests
 console.log(`There are currently ${library.books.length} books in the library's database.`);
 library.addBook("Eloquent JavaScript", "Marijn Haverbeke");
 receiveBooks(newBooks);
 library.checkOutBook("Eloquent JavaScript");
 library.checkOutBook("Grokking the Coding Interview");
 library.getAvailableBooks();

