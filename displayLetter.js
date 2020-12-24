const CLASS_DISPLAY_NONE = 'displayNone';
const letterDiv = document.querySelector('.letterDiv'),
    letterImg = letterDiv.querySelector('div'),
    messageDiv = document.querySelector('.messageDiv'),
    rtanImg = messageDiv.querySelector('.rtan');

function clickLetter() {
    letterDiv.classList.add(CLASS_DISPLAY_NONE);
    messageDiv.classList.remove(CLASS_DISPLAY_NONE)
}

function clickMessageImg() {
    alert('앗! 들켰다!');
    window.location.href = 'https://www.naver.com';
}

function init() {
    letterImg.addEventListener("click", clickLetter);
    rtanImg.addEventListener("click", clickMessageImg);
}

init();
