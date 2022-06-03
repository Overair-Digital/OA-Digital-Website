import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
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
let Regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    validate();
});
function validate () {
    const emailVal = email.value.trim();
    const nameVal = name.value.trim();
    const msgVal = name.value.trim();
    
    if (nameVal === '') {
        console.log("Name field cant be empty");
        showError(name, "The name field cant be empty.")
    } else {
        console.log("Your name is : " + nameVal);
        showSuccess(name)
    }
    
    if (msgVal === '') {
        console.log("Message field cant be empty");
        showError(msg, "The message field cant be empty.")
    } else {
        console.log("Your message consits of : " + msgVal);
        showSuccess(msg)
    }
    
    if (emailVal === '') {
        console.log("Please input a valid email");
        showError(email, "Please input a valid email.")
    } else if (!checkEmail(emailVal)) {
        showError(email, "Not a valid Email.")
        console.log("Your email doesnt contain the correct email types.");
        showSuccess(email)
    } else {
        console.log("Correct email, your email is : " +  email.value);
        showSuccess(email)
    }
}

function showError (input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'section-container columns.content content-container formControl error input';
    small.innerText = message
}
function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = 'section-container columns.content content-container formControl success input';
}
function checkEmail (email) {
    return Regx.test(email);
    //return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
//     let Regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/*
const scrollTracker = document.querySelector('.scrollTracker');
const scrollTracking = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});
scrollTracker.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"],
    },
    {
        duration: 1,
        timeline: scrollTracking
    }
);
*/

const arrowDown = document.querySelector('.ok');

const animatedArrowDown = new ScrollTimeline({
    scrollOffsets: [
        { target: arrowDown, edge: "end", threshold: "1" },
        { target: arrowDown, edge: "start", threshold: "1" }
    ],
});

arrowDown.animate(
    {
        transform: ["translateY(100px)", "translateY(0px)"],
    }, {
        duration: 1,
        timeline: animatedArrowDown
    }
);