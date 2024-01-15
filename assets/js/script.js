let btn = document.querySelector('#logo-img');
const audio = new Audio();
audio.src = "assets/audio/its-ok-to-not-be-ok.mp3";
const progressed = document.getElementById("progressed");
const progress_bar = document.getElementById("progress_bar");
var active = false;

btn.onclick = function() {
    if(active == false){
        btn.classList.add('active');
        audio.play();
        active = true;
    } else if(active == true){
        btn.classList.remove('active');
        audio.pause();
        audio.currentTime = 0;
        active = false;
    }
    
}

audio.ontimeupdate = function(e){
    progressed.style.width = Math.floor(audio.currentTime*100/audio.duration) + "%";
}

progress_bar.onclick = function(e){
    audio.currentTime = ((e.offsetX/progress_bar.offsetWidth) * audio.duration);
}