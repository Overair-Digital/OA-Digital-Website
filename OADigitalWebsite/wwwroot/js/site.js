let androidIcon = document.querySelector('.fa-android');

androidIcon.addEventListener('onmouseOver', onmouseover);
androidIcon.addEventListener('onmouseOut', onmouseout);

function onmouseOver () {
    androidIcon.classList.add('fa-bounce');
}
function onmouseOut () {
    androidIcon.classList.remove('fa-bounce')
}