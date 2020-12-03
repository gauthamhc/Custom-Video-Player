const video = document.getElementById('video');
const progress = document.getElementById('progress');
const timeStamp = document.getElementById('timestamp');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');

//Add functions
// toggle video status function
function toggleVideoStatus() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

//function to update play Icon
function updatePlayIcon() {
  if(video.paused) {
    playBtn.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    playBtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
  }
} 

//function to stop the video
function stopVideo() {
  video.currentTime = 0;
  video.pause();
}

//function update video progress
function updateProgress() {
  progress.value = (video.currentTime/video.duration)*100;

  //Get mins
  let mins = Math.floor(video.currentTime/60);
  if(mins<10) {
    mins = '0' + String(mins);
  }

  //Get secs
  let secs = Math.floor(video.currentTime%60);
  if(secs<10) {
    secs = '0' + String(secs);
  }

  timeStamp.innerHTML = `${mins}:${secs}`;
}
//set Video Progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration)/100;
}

//Add event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('change', setVideoProgress)

playBtn.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo)

