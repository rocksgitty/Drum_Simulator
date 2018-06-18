window.addEventListener('keypress', function(e) {

    const audio = document.getElementById(e.keyCode + "AUD");

    const key = document.getElementById(e.keyCode);
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
    var event = e;
});

function removeTransition() {
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));