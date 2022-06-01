let androidIcon = document.querySelector('.fa-android');
let appleIcon = document.querySelector('.fa-apple');

// Android Icon
androidIcon.addEventListener('onmouseOver', onmouseover);
androidIcon.addEventListener('onmouseOut', onmouseout);

function onmouseOver () {
    androidIcon.classList.add('fa-bounce');
}
function onmouseOut () {
    androidIcon.classList.remove('fa-bounce')
}
// Android Icon

// Apple Icon
appleIcon.addEventListener('onMouseOver', onmouseover);
appleIcon.addEventListener('onMouseOut', onmouseout);

function onMouseOver () {
    appleIcon.classList.add('fa-beat-fade');    
}
function onMouseOut () {
    appleIcon.classList.remove('fa-beat-fade');
}
// Apple Icon

// Email Validation
let form = document.querySelector('#form');
let email = document.querySelector('#email');
let name = document.querySelector('#name');
let msg = document.querySelector('#message');

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    validate();
})
function validate () {
    const emailVal = email.value.trim();
    const nameVal = name.value.trim();
    const msgVal = name.value.trim();
    
    if (nameVal === '') {
        showError(name, "The name field cant be empty.")
    } else {
        showSuccess(name)
    }
}

function showError (input, message) {
    
}
function showSuccess (input) {
    
}
//     let Regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/