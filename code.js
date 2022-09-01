
function shut() {
  audio = document.getElementById('audioplayer');
  textaudio = document.getElementById("button2");
  if (audio.muted == false) {
    audio.muted = true;
    audio.pause();
    textaudio.src = "media/pics/musicoff.png";
  }
  
  else {
    audio.play();
    audio.muted = false;
    textaudio.src = "media/pics/musicon.png";
  }
}

