const video = document.querySelector('#myVideo');
const logo = document.querySelector('.logo');
var adTimer = null;

video.addEventListener('playing', showAds);
video.addEventListener('pause', stopAds);

function showAds(){
    console.log('oi')
    stopAds();
    adTimer = setInterval(()=>{
        logo.style.display = "block";
        setInterval(()=>{
            logo.style.display = "none";
        }, 300);
    }, 5000);
}
function stopAds(){
    clearInterval(adTimer)
}

function setSpeed(direction){
    if(direction === 'up'){
        video.playbackRate += 0.5;
    } else if (direction === 'down'){
        video.playbackRate -= 0.25;
    } else {
        video.playbackRate = 1;
    }
}

function setVideoTime(position){
    video.currentTime = position;
    video.play();
}

function startVideo(){
    video.play();
}

(
    function sumir(){
        video.style.display = 'none';
    }
)()