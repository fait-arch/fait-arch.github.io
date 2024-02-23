const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "The Nights (Lyrics)",
    name: "Avicii",
    source:
      "https://github.com/fait-arch/fait-arch.github.io/raw/main/public/music/Avicii%20-%20The%20Nights%20(Lyrics).mp3",
  },
  {
    title: "From The Start",
    name: "Good Kid",
    source:
      "https://github.com/fait-arch/fait-arch.github.io/raw/main/public/music/From%20The%20Start%20-%20Good%20Kid%20(Sub%20Espa%C3%B1ol).mp3",
  },
  {
    title: "Mafuyus Song",
    name: "Given",
    source:
      "https://github.com/fait-arch/fait-arch.github.io/raw/main/public/music/Mafuyus%20Song%20%20given.mp3",
  },
  {
    title: "Por ella",
    name: "Gufi",
    source:
      "https://github.com/fait-arch/fait-arch.github.io/raw/main/public/music/gufi%20-%20por%20ella%20%20letra.mp3",
  },
  {
    title: "Traición✦",
    name: "Miranda",
    source:
      "https://github.com/fait-arch/fait-arch.github.io/raw/main/public/music/%E1%9F%B9%20%20%E1%B3%9D%20%E0%A3%AA%20%F0%9D%96%AB%F0%9D%97%A8%F0%9D%97%96%F0%9D%96%AA%F0%9D%96%A8%F0%9D%96%B3%F0%9D%97%AC%20%E2%94%80%20Traici%C3%B3n%20%E2%9C%A6%20Miranda!.mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});

// Inspiration: https://dribbble.com/shots/5455156-Car-HMI-assistant-Album-switching
