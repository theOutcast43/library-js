/*class Book{
    constructor(
        title = 'Unknown',
        author = 'Unkwown',
        pages = '0',
        status = false
    ){
        this.title = title
        this.author = author
        this.pages = pages
        this.status = status
    }
}

class Library {
    constructor(){
        this.books = [];
    }
    addBook(newBook){
        if(!this.isInLibrary(newBook)){
            this.books.push(newBook)
        }
    }
    removeBook(title){
        this.books = this.books.filter((book) => book.title !== title)
    }
    getBook(title){
        return this.books.find((book) => book.title === title)
    }
    isInLibrary(newBook){
        return this.books.some((book) => book.title === newBook.title)
    }
}*/

const username = document.getElementById('username');

username.onkeydown = submit;
function submit(e) {
    if (e.key == 'Enter') {
        e.preventDefault()
    handleKeyboardInput()
    }
}
const handleKeyboardInput = () => {
    openAccountModal()
}

const body = document.getElementById('body');
const firstContainer = document.getElementById('container');
const firstHeader = document.getElementById('header')
const inputOne = document.getElementById('username');
const firstFooter = document.getElementById('footer');

const removeOldHTML = () => {
    firstContainer.remove();
    firstHeader.remove();
}
const newHTML = () => {
    const secondContainer = document.createElement('div');
    const addToLibraryBtn = document.createElement('div');
    const secondHeader = document.createElement('h1');
    
    secondContainer.setAttribute('id', 'container2');
    addToLibraryBtn.classList.add('addToLib','big','white');
    addToLibraryBtn.textContent = '+ Add Book';
    secondContainer.classList.add('container2');
    secondHeader.setAttribute('id', 'username2');
    secondHeader.classList.add('header2','white');

    firstFooter.before(secondContainer);
    secondContainer.before(secondHeader);
    secondContainer.appendChild(addToLibraryBtn);

    username.oninput = function(){
        secondHeader.innerHTML = username.value + `'s Library`;
    }();
}

const openAccountModal = () => {
    removeOldHTML();
    newHTML();
}


function Book(title,author,pages,status){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

const createFormModal = () => {
    const formContainer = document.createElement('form');
    const heading = document.createElement('h3');
    const title = document.createElement('input');
    const author = document.createElement('input');
    const pages = document.createElement('input');
    const status = document.createElement('input');
    
    title.setAttribute('type','text');
    author.setAttribute('type','text');
    pages.setAttribute('type','number');
    status.setAttribute('type','checkbox');

    formContainer.classList.add('form-container');
    heading.classList.add('heading-h3');
}