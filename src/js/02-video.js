const video = document.querySelector("#vimeo-player");
console.log(video);
const player = new Vimeo.Player(video);
console.log(player);
//player.on('play', function() {
    //console.log('played the video!');
//});

//player.getVideoTitle().then(function(title) {
    //console.log('title:', title);
//});


//console.log(dataSec);
let t = [];
console.log(t);
player.on('timeupdate', function(data) {
   // console.log(data);
   if(data !== 0){
    console.log(data.seconds);
     
   }
   
    
   //console.log(data);
   
    // seconds = the actual time that the player seeked to

});
player.on('pause', function(data){
    console.log(data);
});
localStorage.setItem("videoplayer-current-time", t.seconds);
    let time = localStorage.getItem('videoplayer-current-time');
    console.log(time);
player.setCurrentTime(10);

//console.log(data);
//localStorage.setItem("videoplayer-current-time", data.seconds);
//let time = localStorage.getItem('videoplayer-current-time');
//console.log(time);