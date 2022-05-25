const video = document.querySelector("#vimeo-player");
const player = new Vimeo.Player(video);

player.on('timeupdate', saveCarrentTime);

function saveCarrentTime (data){
    localStorage.setItem("videoplayer-current-time", data.seconds);
    console.log(data.seconds);
    video.reset();
};

    let time = localStorage.getItem('videoplayer-current-time');
    console.log(time);
    player.setCurrentTime(throttle(time, 1000));

