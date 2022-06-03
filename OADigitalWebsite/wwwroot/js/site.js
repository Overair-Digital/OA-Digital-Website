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

const arrowDown = document.querySelector('.arrow');
const imgOffSetTop = arrowDown.offsetTop;
const imgHeight = arrowDown.offsetHeight;

const animatedArrowDown = new ScrollTimeline({
    scrollOffsets: [
        //{ target: arrowDown, edge: "end", threshold: "1" },
        //{ target: arrowDown, edge: "start", threshold: "1" }
        CSS.px(imgOffSetTop + imgHeight - window.innerHeight),
        CSS.px(imgOffSetTop - 350)
    ],
});
arrowDown.animate(
    {
        transform: ["translateY(100px)", "translateY(0px)"],
        opacity: ["0", "1"],
    }, {
        duration: 1,
        easing: "linear",
        timeline: animatedArrowDown
    }
);

const appleBorder = document.querySelector('.apple');
const h1topOffset = appleBorder.offsetTop; //Apple border dims
const h1height = appleBorder.offsetHeight;

const animatedH1 = new ScrollTimeline({
    scrollOffsets: [
        CSS.px(h1topOffset + h1height - window.innerHeight),
        CSS.px(h1topOffset - 250)
    ]
});
appleBorder.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"],
    }, {
        duration: 1,
        easing: "linear",
        timeline: animatedH1
    },
);

const androidBorder = document.querySelector('.android');
const androidOffsetTop = androidBorder.offsetTop; //Android border dims
const androidHeight = androidBorder.offsetHeight;

const animatedH1A = new ScrollTimeline({
    scrollOffsets: [
        CSS.px(androidOffsetTop + androidHeight - window.innerHeight),
        CSS.px(androidOffsetTop - 250)
    ]
});
androidBorder.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"],
    }, {
        duration: 1,
        easing: "linear",
        timeline: animatedH1A
    },
);

const htmlBorder = document.querySelector('.web');
const htmlOffsetTop = htmlBorder.offsetTop; //Html border dims
const htmlHeight = htmlBorder.offsetHeight;

const animatedH1W = new ScrollTimeline({
    scrollOffsets: [
        CSS.px(htmlOffsetTop + htmlHeight - window.innerHeight),
        CSS.px(htmlOffsetTop - 250)
    ]
});
htmlBorder.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"],
    }, {
        duration: 1,
        easing: "linear",
        timeline: animatedH1W
    },
);