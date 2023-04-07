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
    const secondHeader = document.createElement('h1');
    
    secondContainer.setAttribute('id', 'container2');
    addToLibraryBtn.classList.add('addToLib','big','white');
    addToLibraryBtn.setAttribute('id','add-book');
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

    addToLibraryBtn.onclick = createForm;
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
    const div = document.createElement('div');
    const exitButton = document.createElement('h4');
    const heading = document.createElement('h3');
    const title = document.createElement('input');
    const author = document.createElement('input');
    const pages = document.createElement('input');
    const labelStatus = document.createElement('label');
    const status = document.createElement('input');
    const submit = document.createElement('button');
    
    exitButton.setAttribute('id','exit');
    title.setAttribute('type','text');
    title.setAttribute('placeholder','Title');
    author.setAttribute('type','text');
    author.setAttribute('placeholder','Author/Writer');
    pages.setAttribute('type','number');
    pages.setAttribute('placeholder','Pages Read')
    status.setAttribute('type','checkbox');
    status.setAttribute('name','status');
    submit.setAttribute('type','submit');
    labelStatus.setAttribute('for','status');

    formContainer.classList.add('form-container');
    div.classList.add('div');
    exitButton.classList.add('exitBtn','white');
    heading.classList.add('head-h3','white');
    title.classList.add('in-title');
    author.classList.add('in-author');
    pages.classList.add('in-pages');
    status.classList.add('in-status');
    submit.classList.add('in-submit','white');
    labelStatus.classList.add('white');

    exitButton.textContent = `x`;
    heading.textContent = `Add Book`;
    labelStatus.textContent = `Have you read this book? `;
    submit.textContent = `Submit`;

    overlay.appendChild(formContainer);
    formContainer.appendChild(div)
    div.appendChild(heading);
    div.appendChild(exitButton);
    formContainer.appendChild(title);
    formContainer.appendChild(author);
    formContainer.appendChild(pages);
    formContainer.appendChild(labelStatus);
    formContainer.appendChild(status);
    formContainer.appendChild(submit);  
    
    exitButton.onclick = function() {
        formContainer.remove();
        closeModal();
    };
}

const overlayModal = () => {
    overlay.classList.add('overlay');
    createFormModal()
}
const closeModal = () => {
    overlay.classList.remove('overlay');
}
function submit(e) {
    if (e.key == 'Enter') {
        e.preventDefault()
    handleKeyboardInput()
    }
}
const handleKeyboardInput = () => {
    openAccountModal()
}

const createForm = () => {
    overlayModal();
}

username.onkeydown = submit;