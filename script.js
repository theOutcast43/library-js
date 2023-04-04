const username = document.getElementById('username');

// username.addEventListener('onkeyup', handleKeyboardInput)
// username.onkeyup = handleKeyboardInput;
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


    // secondHeader.textContent = "My Library";
    // const usernameValue = document.getElementById('username').value;
    // document.getElementById('username2').innerHTML = usernameValue;
    // inputOne.value

    username.oninput = function(){
        secondHeader.innerHTML = username.value + `'s Library`;
    }();
}

const openAccountModal = () => {
    removeOldHTML();
    newHTML();
}