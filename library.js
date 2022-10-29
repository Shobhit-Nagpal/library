//Array to store book instances
let myLibrary = [];

/*
//Object constructor to create books
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  
    this.info = function() {
      return (`${title} by ${author}, ${pages} pages, ${read}`);
    }
}
*/
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    info() { return (`${title} by ${author}, ${pages} pages, ${read}`); }
}

//Adding book instances to library
function addToLibrary(book) {

    myLibrary.push(book);

}


//Displaying books

/*    Create div, add elements, add correct texts to elements through object, append div to library div*/
function displayBooks() {

    const parentDiv = document.querySelector('.library');

    for(let i = 0 ; i < myLibrary.length ; i++) {
        const div = document.createElement('div');
        div.classList.add("book");

        parentDiv.appendChild(div);

        const title = document.createElement('h1');
        title.setAttribute('id','title');
        title.textContent = myLibrary[i].title;

        const author = document.createElement('p');
        author.setAttribute('id','author');
        author.textContent = myLibrary[i].author;

        const pages = document.createElement('p');
        pages.setAttribute('id','pages');
        pages.textContent = `${myLibrary[i].pages} pages`;

        const haveRead = document.createElement('p');
        haveRead.setAttribute('id','read-book');
        haveRead.textContent = myLibrary[i].read;

        const readBtn = document.createElement('button');
        readBtn.textContent = 'Read';
        readBtn.classList.add("read");

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add("remove");

        div.dataset.index = `${i}`;


        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(haveRead);
        div.appendChild(readBtn);
        div.appendChild(removeBtn);
        
    }

}


//Creating book objects
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
const Hooked = new Book("Hooked", "Nir Eyal", 246, "read");
const lettersFromAStoic = new Book("Letters from a Stoic", "Seneca", 381, "read");


//Adding books to library
addToLibrary(theHobbit);
addToLibrary(Hooked);
addToLibrary(lettersFromAStoic);


displayBooks();


//Opening form
document.querySelector('.add-book').addEventListener('click', function() {
    const form = document.querySelector('.bg-form');
    form.style.display = 'flex';
});

//Closing form
document.querySelector('.close').addEventListener('click', function() {
    const form = document.querySelector('.bg-form');
    form.style.display = 'none';
});


//Removing a book

const removeBtns = document.querySelectorAll('.remove');

removeBtns.forEach(button => {
    button.addEventListener('click', () => {
        const index = button.parentNode.dataset.index;
        console.log(index);

        const divToRemove = button.parentNode;

        const parentDiv = document.querySelector('.library');
        parentDiv.removeChild(divToRemove);


        myLibrary.splice(index,1);
    })
});


//Reading book

const readBtns = document.querySelectorAll('.read');

readBtns.forEach(button => {
    button.addEventListener('click', () => {

        const index = parseInt(button.parentNode.dataset.index);

        if(myLibrary[index].read === 'read') {
            myLibrary[index].read = 'not read yet';

            const readText = button.parentNode.querySelector('#read-book');
            readText.textContent = 'Not read yet';
        }
        else {
            myLibrary[index].read = 'read';

            const readText = button.parentNode.querySelector('#read-book');
            readText.textContent = 'Read';
        }

    })
});