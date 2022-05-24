const video = document.querySelector("#vimeo-player");
console.log(video);
const player = new Vimeo.Player(video);
console.log(player);
player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});
let currentTime = '';
console.log(currentTime);
player.on('timeupdate', function(data) {
   let currentTime = localStorage.setItem("videoplayer-current-time", `${data}`);
   console.log(currentTime);
   return currentTime;
    
});