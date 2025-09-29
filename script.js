const audio = document.getElementById("myAudio");
const btn = document.getElementById("playPauseBtn");
const icon = btn.querySelector("i");

btn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    } else {
      audio.pause();
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    }
  });