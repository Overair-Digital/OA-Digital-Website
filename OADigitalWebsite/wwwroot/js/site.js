import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

// Email Validation
let form = document.querySelector('#form');
let email = document.querySelector('#email');
let name = document.querySelector('#name');
let msg = document.querySelector('#message');
//let small = document.querySelector('small');
let Regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


form.addEventListener('submit', (e) => {
    const usernameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = msg.value.trim();

    if (usernameValue === '') {
        e.preventDefault();
        setErrorFor(name, 'Name cannot be blank');
    } else {
        setSuccessFor(name, "Valid name");
    }

    if (emailValue === '') {
        e.preventDefault();
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        e.preventDefault();
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email, "Valid email");
    }

    if (messageValue === '') {
        e.preventDefault();
        setErrorFor(msg, 'Message cannot be blank');
    } else {
        setSuccessFor(msg, "Valid message");
    }

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.style.display = "block";
    small.style.color = "red";
    small.innerText = message
}

function setSuccessFor(input, message) {
    //const formControl = input.parentElement;
    //formControl.className = 'form-control success';
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.style.display = "block";    
    small.style.color  = "rgb(46, 223, 132)";
    small.innerText = message;
}

function isEmail(email) {
    return Regx.test(email);
}
});


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
        CSS.px(androidOffsetTop - 300)
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
