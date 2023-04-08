const username = document.getElementById('username');
const body = document.getElementById('body');
const firstContainer = document.getElementById('container');
const firstHeader = document.getElementById('header')
const inputOne = document.getElementById('username');
const firstFooter = document.getElementById('footer');
const overlay = document.createElement('div');
    overlay.setAttribute('id','overlay');
    body.appendChild(overlay);

const removeOldHTML = () => {
    firstContainer.remove();
    firstHeader.remove();
}
const newHTML = () => {
    const secondContainer = document.createElement('div');
    const addToLibraryBtn = document.createElement('div');
    const booksGrid = document.createElement('div');
    const secondHeader = document.createElement('h1');
    
    secondContainer.setAttribute('id', 'container2');
    addToLibraryBtn.classList.add('addToLib','big','white');
    addToLibraryBtn.setAttribute('id','add-book');
    addToLibraryBtn.textContent = '+ Add Book';
    secondContainer.classList.add('container2');
    booksGrid.setAttribute('id','booksGrid');
    booksGrid.classList.add('booksGrid');
    secondHeader.setAttribute('id', 'username2');
    secondHeader.classList.add('header2','white');

    firstFooter.before(secondContainer);
    secondContainer.before(secondHeader);
    secondContainer.appendChild(addToLibraryBtn);
    secondContainer.appendChild(booksGrid);

    username.oninput = function(){
        secondHeader.innerHTML = username.value + `'s Library`;
    }();

    addToLibraryBtn.onclick = createForm;
    function createForm() {
        overlayModal();
        createFormModal();
    }

    const createFormModal = () => {
        const formContainer = document.createElement('form');
        const div = document.createElement('div');
        const exitButton = document.createElement('h4');
        const heading = document.createElement('h3');
        const title1 = document.createElement('input');
        const author1 = document.createElement('input');
        const pages1 = document.createElement('input');
        const labelStatus1 = document.createElement('label');
        const status1 = document.createElement('input');
        const submit1 = document.createElement('button');
        
        exitButton.setAttribute('id','exit');
        title1.setAttribute('id','title');
        title1.setAttribute('type','text');
        title1.setAttribute('placeholder','Title');
        title1.setAttribute('oninput','');
        title1.setAttribute('required','');
        author1.setAttribute('id','author');
        author1.setAttribute('type','text');
        author1.setAttribute('placeholder','Author/Writer');
        author1.setAttribute('oninput','');
        pages1.setAttribute('id','pages');
        pages1.setAttribute('type','number');
        pages1.setAttribute('placeholder','Pages Read')
        pages1.setAttribute('oninput','');
        status1.setAttribute('id','status');
        status1.setAttribute('type','checkbox');
        status1.setAttribute('name','status');
        submit1.setAttribute('type','submit');
        labelStatus1.setAttribute('for','status');
    
        formContainer.classList.add('form-container');
        div.classList.add('div');
        exitButton.classList.add('exitBtn','white');
        heading.classList.add('head-h3','white');
        title1.classList.add('in-title');
        author1.classList.add('in-author');
        pages1.classList.add('in-pages');
        status1.classList.add('in-status');
        submit1.classList.add('in-submit','white');
        labelStatus1.classList.add('white');
    
        exitButton.textContent = `x`;
        heading.textContent = `Add Book`;
        labelStatus1.textContent = `Have you read this book? `;
        submit1.textContent = `Submit`;
    
        overlay.appendChild(formContainer);
        formContainer.appendChild(div)
        div.appendChild(heading);
        div.appendChild(exitButton);
        formContainer.appendChild(title1);
        formContainer.appendChild(author1);
        formContainer.appendChild(pages1);
        formContainer.appendChild(labelStatus1);
        formContainer.appendChild(status1);
        formContainer.appendChild(submit1);  
        
        exitButton.onclick = function() {
            formContainer.remove();
            closeModal();
        };
        submit1.onclick = function(e){
            e.preventDefault();
            formContainer.remove();
            createBookCard();
            closeModal();
        }
        const createBookCard = () => {
            const bookCard = document.createElement('div')
            const title2 = document.createElement('p')
            const author2 = document.createElement('p')
            const pages2 = document.createElement('p')
            const buttonGroup = document.createElement('div')
            const readBtn = document.createElement('button')
            const removeBtn = document.createElement('button')

            bookCard.classList.add('book-card')
            buttonGroup.classList.add('button-group')
            readBtn.classList.add('btn')
            removeBtn.classList.add('btn')
            // readBtn.onclick = toggleRead
            removeBtn.onclick = removeBook
            removeBtn.textContent = 'Remove'

            title1.oninput = function(){
                title2.innerHTML = title1.value;
            }();
            author1.oninput = function(){
                author2.innerHTML = author1.value;
            }();
            pages1.oninput = function(){
                pages2.innerHTML = pages1.value + ` pages`;
            }();

            function removeBook() {
                bookCard.remove();
            }

            bookCard.appendChild(title2)
            bookCard.appendChild(author2)
            bookCard.appendChild(pages2)
            buttonGroup.appendChild(readBtn)
            buttonGroup.appendChild(removeBtn)
            bookCard.appendChild(buttonGroup)
            booksGrid.appendChild(bookCard)
        }
    }
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

const overlayModal = () => {
    overlay.classList.add('overlay');
}
const closeModal = () => {
    overlay.classList.remove('overlay');
}
function submit1(e) {
    if (e.key == 'Enter') {
        e.preventDefault()
    handleKeyboardInput()
    }
}
const handleKeyboardInput = () => {
    openAccountModal()
}

username.onkeydown = submit1;