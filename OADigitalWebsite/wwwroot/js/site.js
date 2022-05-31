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