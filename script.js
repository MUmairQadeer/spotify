console.log("Wellcome to Spotify");
let songindex = 0;
let audioElement = new Audio("0.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
  { songName: "295-Sidu moose wala", coverPath: "http://logicalfact.in/wp-content/uploads/2020/12/Sidhu-Moose-wala-Photos-20204-min.jpg" },
  { songName: "Dark love-Sidu moose wala", coverPath: "http://logicalfact.in/wp-content/uploads/2020/12/Sidhu-moose-wala-2121-7-min.jpg" },
  { songName: "Just listen-Sidu moose wala", coverPath: "https://i1.sndcdn.com/artworks-000357272061-l63smc-t500x500.jpg" },
  { songName: "Legent-Sidu moose wala", coverPath: "https://i.pinimg.com/originals/fb/30/56/fb305622cbe2816cdd199f0ef7546b0a.jpg" },
  { songName: "Same beef-Sidu moose wala", coverPath: "https://tse4.mm.bing.net/th?id=OIP.KU-VitTx1bN_j5TkOrvFJwHaEK&pid=Api&P=0&h=180" },
  { songName: "Tibeyan-Sidu moose wala", coverPath: "https://1.bp.blogspot.com/-KNLgx8UeUGU/XvsEigtgdNI/AAAAAAAAWgU/7mPAbAL1-3MxQs8TbZnQMvHXDI0XqsXjQCLcBGAsYHQ/s1600/Sidhu-Moose-Wala-Singer%2B%25281%2529.png" },
  { songName: "So high-Sidu moose wala", coverPath: "https://i.ytimg.com/vi/GgmFC8y8q3k/maxresdefault.jpg" },
  { songName: "Devil-Sidu moose wala", coverPath: "http://logicalfact.in/wp-content/uploads/2020/12/Sidhu-moose-wala-2121-14-min.jpg" },
  { songName: "Tochan-Sidu moose wala", coverPath: "http://logicalfact.in/wp-content/uploads/2020/12/Sidhu-Moose-wala-Photos-202012-min.jpg" },
  { songName: "Karay-Sidu moose wala", coverPath: "https://photo-cdn.urdupoint.com/media/2022/05/_3/420x350/pic_1653912070.jpg" },
  { songName: "Levels-Sidu moose wala", coverPath: "https://www.lyricsstatus.com/wp-content/uploads/2022/05/Sidhu-Moose-Wala-Level-Lyrics-Status-Download-Punjabi-Song.jpg" },
  { songName: "These days-Sidu moose wala", coverPath: "https://i1.sndcdn.com/artworks-M1nk21hDjVpe0Vfg-at1X2g-t500x500.jpg" },
  { songName: "Us-Sidu moose wala", coverPath: "https://i.ytimg.com/vi/uhNzf_cMpTg/hqdefault.jpg" },
]
songitem.forEach((element, i) => {

  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});


//Handle play/pause click
masterplay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;

  }
  else {
    audioElement.pause();

    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity = 0;


  }
});


//Listen to Events

audioElement.addEventListener('timeupdate', () => {
  //Update Seekbar  
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  myprogressbar.value = progress;
});
myprogressbar.addEventListener('change', () => {
  audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
});
const makeallplays = () => {
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {

    element.classList.remove('fa-pause-circle')
    element.classList.add('fa-play-circle')
  });
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeallplays();
    songindex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `${songindex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    mastersongname.innerText = songs[songindex].songName;

    gif.style.opacity = 1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

  });
});
document.getElementById('next').addEventListener('click', () => {
  if (songindex >= 12) {
    songindex = 0
  }

  else {
    songindex += 1;
  }

  audioElement.src = `/${songindex}.mp3`;
  mastersongname.innerText = songs[songindex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');
  makeallplays();

});
document.getElementById('previous').addEventListener('click', () => {
  if (songindex <= 0) {
    songindex = 12
    makeallplays();

  }


  else {
    songindex -= 1;
  }

  audioElement.src = `${songindex}.mp3`;
  mastersongname.innerText = songs[songindex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterplay.classList.remove('fa-play-circle');
  masterplay.classList.add('fa-pause-circle');
  makeallplays();
});

audioElement.onended = function () {
  songindex += 1;
  audioElement.src = `${songindex}.mp3`;
  mastersongname.innerText = songs[songindex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  makeallplays();
}
if(songindex=>12){
  songindex=1
  audioElement.src = `${songindex}.mp3`;
  mastersongname.innerText = songs[songindex].songName;
  audioElement.currentTime = 0;
  makeallplays();
}